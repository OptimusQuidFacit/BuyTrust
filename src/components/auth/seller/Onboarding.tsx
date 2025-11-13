"use client"
import { useSteps } from "@/lib/customHooks/useSteps";
import { ArrowLeft, ArrowRight } from "lucide-react";

// import { useFormContext } from "@/lib/customHooks/useFormContext";
import { useActionState, useEffect, useMemo, useState } from "react";
import { updateUser } from "@/lib/actions/user";
import TextInput from "@/components/utility/TextInput";
import Button from "@/components/utility/Button";
import AppAlert from "@/components/appComponents/AppAlert";
import TextLoader from "@/components/utility/loaders/TextLoader";
import { type UpdateUserResponse } from "@/lib/types/user";
import { useRouter } from "next/navigation";




const Onboarding = () => {
    // const {form, setForm} = useFormContext()
    // console.log(form)
    const router=useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const [state, formAction, pending]= useActionState(updateUser, undefined)

    const questions= useMemo(()=>

        [
            {
                name: "companyName",
                text: "What is your business name", 
            },
            {
    
                name: "companyLocation",
                text:"Where is your business located"
            }
        ], []
    )
    
    const [currentValue, currentStep, nextStep, previousStep, changeStep]= useSteps(questions);
    const [showMessage, setShowMessage] = useState(false)
    // console.log(currentValue);
    // const setFormValue=(value:string)=>{
    //     setForm({...form, [currentValue.name]:value})
    //     console.log("Changed");
        
    // }
    useEffect(() => {
      setShowMessage(true)
        const timer= setTimeout(()=>setShowMessage(false), 2000)
      return () => {
        clearTimeout(timer)
      }
    }, [state?.timestamp])
    
    useEffect(() => {
        if (state?.message === "User updated Successfully") {
            if(currentStep<questions.length-1){
                console.log("Success received on step:", currentStep);
                nextStep();  

            }
            else {
                console.log("All steps done, closing alert...");
                const closeTimer = setTimeout(() => {
                    setIsOpen(false);
            
                    // reset after closing smoothly
                    const resetTimer = setTimeout(() => {
                      setShowMessage(false);
                      changeStep(0);
                      // setIsOpen(true); // uncomment if you want it to reopen automatically
                    }, 500);
                    router.push('/seller');
                    return () => clearTimeout(resetTimer);
                  }, 2000);
            
                  return () => clearTimeout(closeTimer);
                
                
            }
          
          
        }
      }, [state?.timestamp]);
      
      console.log(currentStep, questions.length-1, isOpen)
 

    return (
        <div>
            <AppAlert open={isOpen} setOpen={setIsOpen} title={currentValue.text as string}>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div>
                        <form>
                            <input type="hidden" name="email" value="chimkaemewiseman@gmail.com" />
                            <input type="hidden" name="name" value={currentValue.name} />
                            <TextInput
                            // onChange={(e)=>setFormValue(e.target.value)}
                            // onFocus={()=>console.log("triggered")}
                            // onClick={()=>console.log("clicked")}
                            name={currentValue.name}
                            type="text"/>
                            <div className="flex justify-between w-full mt-3">

                                <Button type="button" icon={<ArrowLeft size={12}/>} onClick={previousStep} isPrimary={true} label="Prev"/>
                                <Button formAction={formAction} type="submit" icon={<ArrowRight size={12}/>} isPrimary={true} label={currentValue.text!==questions[questions.length-1].text?"Next":"Submit"}/>
                                
                            </div>
                            {pending&&<TextLoader/>}
                        </form>
                        {showMessage&&<div className="mt-2">
                            <p className="text-warning">
                                {state?.error}
                            </p>
                            <p className="text-success">
                                {state?.message}
                            </p>

                        </div>}
                    </div>
                </div>
            </AppAlert>
        </div>
    );
}

export default Onboarding;