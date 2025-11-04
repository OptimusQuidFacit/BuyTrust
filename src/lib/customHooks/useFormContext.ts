import { formContext } from "@/components/utility/providers/FormContext"
import { useContext } from "react"

export const useFormContext = () => {
    const context = useContext(formContext)
    if (!context) {
      throw new Error("useFormContext must be used within a FormContextProvider")
    }
    return context
  }