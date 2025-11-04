"use client"
import { LogIn } from "lucide-react";
import Button from "../utility/Button";
import TextInput from "../utility/TextInput";
import { useActionState } from "react";
import { handleLogin } from "@/lib/actions/user";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import TextLoader from "../utility/loaders/TextLoader";

const LoginForm = () => {
    const [state, formAction, pending] = useActionState(handleLogin, undefined)
    return (
        <>
            <div>
                 <div className="flex justify-center gap-3">
                                <Button color="white"  icon={<FaFacebook color="blue"/>}/>
                                <Button color="white"  icon={<FaGoogle color="red"/>}/>
                                <Button color="white"  icon={<FaApple color="black"/>}/>
                </div>
                <form action={formAction}>
                    <TextInput type="email" name="email" placeholder="Enter your Email address"/>
                    <TextInput type="password" name="password" placeholder="Enter your password here"/>
                    <div className="flex justify-center mt-3">
                        {pending?<TextLoader/>:<Button isPrimary={true} label={"Submit"} icon={<LogIn size={14}/>}/>}
                    </div>
                </form>
                <div>
                    {state?.error && <p className="text-primary">{state.error}</p>}
                </div>
            </div>
        </>
    );
}

export default LoginForm;