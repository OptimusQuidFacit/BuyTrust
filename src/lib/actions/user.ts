"use server";
import bcrypt from "bcryptjs"


import { connectToDb } from "../config/dbconnection";
import { signIn, signOut } from "../auth";
import User from "../models/user";
import { signInSchema } from "../zod";
import { z, ZodError } from "zod";
import { UpdateUserResponse } from "../types/user";

export const addUser= async (prevState:any, formData:any) => {
    const form = Object.fromEntries(formData);
    
    try{
        const {email, password}= await signInSchema.parseAsync({email:form.email,password: form.password})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(password, confirmPassword);
        if(password!==form.confirmPassword){
            return {
                error: "Passwords do not match"
            }
            
        }
        connectToDb();
        // if(!firstname || !password || !lastname || !email){

        // }
        const newUser = new User({
            username:email, email, password:hashedPassword
        })
        const user= await User.findOne({email:email});
        if(user){
            return{
                error:"email already registered"
            }
        }
        await newUser.save();
        return{
            message:'Successful email registration'
        }
    }
    catch(err:any){
        console.log(err.message);
        if (err instanceof ZodError){
            return {
                error:err.errors[0].message
            }
        }
        return {
            error: err.message
        }
    }
}

export const updateUser= async (prevState:any, formData: any): Promise<UpdateUserResponse>=>{
    const {email, name, ...rest} = Object.fromEntries(formData)
    // const update = { [name]: value };
    try{
        connectToDb();

        const updatedDoc = await User.findOneAndUpdate(
          { email},
          { $set: { [`sellerDetails.${name}`]: rest[name]} },
          { new: true, runValidators: true }
        );
        // console.log(updatedDoc);

        if(updatedDoc) return{
            message:"User updated Successfully",
            timestamp:Date.now()
        }
        else

        return{
            error:"User not found",
            timestamp: Date.now()
        }
    }
    catch(err){
        console.log(err);
        return {
            error:"Failed to update user",
            timestamp:Date.now()
        }
    }
}
export const handleLogin= async (prevState:any, formData:any)=>{
    const {email, password}= Object.fromEntries(formData);
    try{
        // console.log(name, password)
        await signIn('credentials', {email, password});
    }
    catch(err:any){
        if(err.message.includes("ECONNREFUSED")){
            return {
                error: "Please check your internet connection"
            }
        }
        if(err?.type?.includes('CredentialsSignin')){
            return{
                error: "Invalid Username or password"
            };
        }
        console.log(err);
        throw err;
    }
}

export const handleLogOut = async ()=>{
    await signOut();
}