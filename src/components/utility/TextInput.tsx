import { cn } from "@/lib/utils";
import { InputHTMLAttributes, ReactElement } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label?: string;
  icon?: ReactElement;
  placeholder?: string;
  className?: string;
}

const TextInput = ({
  name,
  type = "text",
  label,
  icon,
  placeholder,
  className,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative w-fit">
        {icon && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <input
          {...rest}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={cn(
            "text-sm pl-6 pr-3 py-2 rounded-xl border border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition w-[200px]",
            className
          )}
        />
      </div>
    </div>
  );
};

export default TextInput;
