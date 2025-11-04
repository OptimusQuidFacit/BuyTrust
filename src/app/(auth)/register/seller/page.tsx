
import Onboarding from "@/components/auth/seller/Onboarding";
import { businessName } from "@/lib/data";
import Image from "next/image";

const page = () => {
    return (
        <>
            <div className="h-screen relative flex justify-center items-center">
            
                <Image fill src={`/authbg.jpg`} alt={`Onboarding background Image at ${businessName}`}/>
                
            <div className="absolute">
                {/* <RegisterForm/> */}
                <Onboarding/>
            </div>
            </div>
        </>
    );
}

export default page;