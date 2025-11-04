import { ButtonHTMLAttributes, ReactElement } from "react";

type props= {
    label?:string,
    icon?:ReactElement,
    isPrimary?:boolean,
    color?:string,
    width?:number
}
const Button = ({label, icon, isPrimary, color, width, ...rest}:props & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...rest} className={` min-w-[20px] text-sm rounded-lg flex items-center justify-center p-3 gap-2 text-white cursor-pointer shadow-xl ${isPrimary?"bg-primary":color?`bg-[${color}]`:`bg-secondary`}`}>
            {icon && <span>{icon}</span>}
            {label}
        </button>
    );
}

export default Button;