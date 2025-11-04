"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { ReactNode, useState } from "react";
import Button from "../utility/Button";


type props ={
    open?:boolean,
    setOpen?: (open:boolean)=>void,
    title?:string,
 
    cancelText?:string,
    continueText?:string, 
    noButtons?:boolean,
    action?:()=>void
}
  const AppAlert = ({open, setOpen, title, cancelText, continueText, noButtons, action,  children}: props & Readonly<{
    children?: React.ReactNode;
  }>) => {
    return (
        <div>
            <AlertDialog open={open} onOpenChange={setOpen}>
            {/* <AlertDialogTrigger>Start Now</AlertDialogTrigger> */}
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription className="flex items-center justify-center" asChild>
                    <div>
                        {children}
                    </div>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                   {!noButtons&& 
                   <>
                        {action && 
                        (
                                    <AlertDialogAction
                                    onClick={() => {
                                        action();
                                        setOpen?.(false);
                                    }}
                                    >
                                    {continueText || "Continue"}
                                    </AlertDialogAction>
                                )
                        }
                        <AlertDialogCancel className="max-w-[70px] mx-auto">{cancelText||"Cancel"}</AlertDialogCancel>
                        {/* <AlertDialogAction>{continueText||"Continue"}</AlertDialogAction> */}
                    </>
                    }
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default AppAlert;