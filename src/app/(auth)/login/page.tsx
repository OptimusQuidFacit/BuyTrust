import LoginForm from "@/components/auth/LoginForm";
import { businessName } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className=" flex min-h-screen p-8 sm:p-3">
            <section className="w-full md:flex-1 p-10 flex flex-col justify-center items-center">
                <div className="flex flex-col">         
                    <h1 className="text-primary text-xl font-bold">
                        Welcome Back
                    </h1>
                    <p className="text-sm mt-3 ">
                        New to {businessName}? 
                        <Link className="ms-1 underline et-secondary" href={'/register'}>
                        Create an account
                        </Link>
                    </p>
                   
                </div>
                <LoginForm/>
            </section>
            <section className="flex-3 hidden md:block">
                <div className="min-h-screen relative">
                    <Image fill src="/authbg.jpg" alt={`Purple background at ${businessName}`} className="object-cover"/>
                </div>
            </section>
        </div>
    );
}

export default page;