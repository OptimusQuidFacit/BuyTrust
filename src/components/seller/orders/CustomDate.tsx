import { DateRangePicker, TwoDatePickers } from "@/components/appComponents/AppDatePicker";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { BiCollapse } from "react-icons/bi";

type props={
    firstDate:Date|undefined,
    secondDate:Date|undefined,
    setFirstDate: Dispatch<SetStateAction<Date | undefined>>
    setSecondDate: Dispatch<SetStateAction<Date | undefined>>
}
const CustomDate = ({setFirstDate, setSecondDate, firstDate, secondDate}:props) => {
    const [show, setShow] = useState(false)
    return (
        <div>
          { !show&&
            <Button variant="outline" className="text-xs bg-secondary text-white" onClick={()=>setShow(true)}>
                Custom Date 
            </Button>
            }
           {
            show&&
            <div>
                <TwoDatePickers firstDate={firstDate} secondDate={secondDate} setFirstDate={setFirstDate} setSecondDate={setSecondDate}/>
                <Button onClick={()=>setShow(false)}> <BiCollapse size={12}/></Button>
            </div>
           }
        </div>
    );
}

export default CustomDate;