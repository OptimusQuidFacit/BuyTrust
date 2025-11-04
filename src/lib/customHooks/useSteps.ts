"use client"
import { useEffect, useState } from "react"

// type paramType={

//     values:any[]
//     // currentStepIndex:number
// }

export const useSteps=<T>(values:T[])=>{
    const [currentStep, setCurrentStep] = useState<number>(0)
    
    const changeStep=(value:number)=>{
        setCurrentStep(value)
    }
    const currentValue= values[currentStep];
    // const incrementStep=()=>{
    //     // if(currentStep>values.length-1){
    //     //     setCurrentStep(0);
    //     //     return
    //     // }
    //     setCurrentValue(values[currentStep]);
    //     setCurrentStep(prev=>prev+1)
    // }
    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, values.length - 1));
        // console.log("It worked");

      };
      
      const previousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
        // console.log("It worked");

      };
    return [currentValue, currentStep, nextStep, previousStep, changeStep] as const
}