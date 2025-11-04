"use client"
import Button from "@/components/utility/Button";
import { businessName } from "@/lib/data";
import Image from "next/image";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import TextInput from "../utility/TextInput";
import { addUser } from "@/lib/actions/user";
import { useActionState } from "react";
import TextLoader from "../utility/loaders/TextLoader";

const RegisterForm = () => {
    const [state, formAction, pending]= useActionState(addUser,undefined)
    return (
        <div>
            <header className="text-center flex justify-center items-center gap-3">
                <h1 className="font-semibold text-primary text-2xl">Welcome</h1>
                <div className="relative w-10 h-10">
                    <Image src={'/icon.png'} alt={`Business logo  ${businessName}`} className="object-cover" fill/>
                </div>
            </header>

            <div className="flex justify-center gap-3">
                <Button  icon={<FaFacebook color="blue"/>}/>
                <Button  icon={<FaGoogle color="red"/>}/>
                <Button  icon={<FaApple color="black"/>}/>
            </div>
            <div className="mt-3 flex items-center justify-center gap-3">
                
                <div className="flex-1">
                    <p className="border-t-1">

                    </p>
                </div>
                    
                    <p>Or</p>

                <div className="flex-1">
                     <p className="border-t-1">
                        
                    </p>
                </div>
            </div>
            <div className="mt-2">
                <form action={formAction}>
                    <TextInput name="email" placeholder="Enter your email address"/>
                    <TextInput name="password" placeholder="Choose Password"/>
                    <TextInput name="confirmPassword" placeholder="Comfirm Password"/>
                    
                    <div className="flex justify-center mt-2">
                        { pending?<TextLoader/>:<Button isPrimary={true} label={"Register"}/>}
                    </div>
                    <div className="mt-2 max-w-[500px]">
    
                            {state?.error?
                            <p className="text-[#f00]">{state.error}</p>
                            :<p className="text-[#109810]">
                                {state?.message}
                            </p>}
                       
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;