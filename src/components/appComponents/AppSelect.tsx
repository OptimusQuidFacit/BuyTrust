import {
    NativeSelect,
    NativeSelectOptGroup,
    NativeSelectOption,
  } from "@/components/ui/native-select"

type props={
    label:string,
    options:string[],
    className?:string
  }
const AppSelect = ({label, options, className}:props) => {
    return (
        <NativeSelect className={className}>
            <NativeSelectOption value="">{label}</NativeSelectOption>
            {
                options.map(option =>

                    <NativeSelectOption key={option} value={option}>
                        {option}
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