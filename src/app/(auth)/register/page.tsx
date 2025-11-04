import RegisterForm from "@/components/auth/RegisterForm";
import Onboarding from "@/components/auth/seller/Onboarding";


const page = () => {
    return (
        <>
            <div className="h-screen relative flex flex-col justify-center items-center">     
                <RegisterForm/>
            </div>
        </>
    );
}

export default page;