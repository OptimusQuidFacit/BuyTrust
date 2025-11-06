import {
    NativeSelect,
    NativeSelectOptGroup,
    NativeSelectOption,
  } from "@/components/ui/native-select"
import { ComponentProps } from "react";

type props={
    label:string,
    options:{name:string, value:number}[],
    className?:string
    selectValue:number|string
  }
const AppSelect = ({label, options, className, selectValue, ...rest}:props & ComponentProps<"select">) => {
    return (
        <NativeSelect value={selectValue} {...rest} className={className}>
            <NativeSelectOption value="">{label}</NativeSelectOption>
            {
                options.map(option =>

                    <NativeSelectOption key={option.name} value={option.value}>
                        {option.name}
                    </NativeSelectOption>
                )
            }
            {/* <NativeSelectOption value="grapes" disabled>
                Grapes
            </NativeSelectOption> */}
        </NativeSelect>
    );
}

export default AppSelect;