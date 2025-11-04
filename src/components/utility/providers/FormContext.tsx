"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

type userFormType = {
    email?: string,
    businessName?:string,
    role?: "buyer"|"seller"|"admin",
    password?:string,
    // setEmail: Dispatch<SetStateAction<string|undefined>>,
    // setBusinessName: Dispatch<SetStateAction<string|undefined>>,
    // setRole: Dispatch<SetStateAction<"buyer"|"seller"|"admin">>,
    // setPassword: Dispatch<SetStateAction<string|undefined>>,


}
export type formContextType = {
    form: userFormType | undefined,
    setForm: Dispatch<SetStateAction<userFormType | undefined>>

}
export const formContext= createContext<formContextType|undefined>(undefined)

const FormContextProvider = ({children}:{children:ReactNode}) => {
    const [form, setForm] = useState<userFormType |undefined>({email:"", businessName:"",role:"buyer"})
    
    return (
        <formContext.Provider value={{form, setForm}}>
            {children}
        </formContext.Provider>
        
    );
}

export default FormContextProvider;