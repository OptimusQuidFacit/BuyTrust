import { Calendar } from "@/components/ui/calendar"
import { Dispatch, SetStateAction, useState } from "react";
import { DateRange } from "react-day-picker";

type props={
    firstDate:Date|undefined,
    secondDate:Date|undefined,
    setFirstDate: Dispatch<SetStateAction<Date | undefined>>
    setSecondDate: Dispatch<SetStateAction<Date | undefined>>
}
const AppDatePicker = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    // const [selected, setSelected] = useState<Date[] | undefined>();

    console.log(date);
    return (
        <div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
            />
        </div>
    );
}

export const DateRangePicker=() => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2024, 5, 12),
    to: new Date(2025, 6, 15),
  })
  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
    />
  )}

  export const TwoDatePickers = ({firstDate, secondDate,setFirstDate, setSecondDate}:props) => {
    
  
    return (
      <div className="fixed bottom-6 right-6 md:flex gap-6 z-50">
        <div>
          <p className="text-xs font-medium mb-[-6] p-1 pb-2  bg-black text-white rounded-t-lg w-1/4">From:</p>
          <Calendar
          selected={firstDate}
            mode="single"
            onSelect={setFirstDate}
            className="rounded-b-lg rounded-tr-lg border shadow-sm"
          />
        </div>
  
        <div className="mt-2 md:mt-0">
          <p className="text-xs font-medium mb-[-6] p-1 pb-2  bg-black text-white rounded-t-lg w-1/4">To:</p>
          <Calendar
          selected={secondDate}
            mode="single"
            onSelect={setSecondDate}
            className="rounded-b-lg rounded-tr-lg border shadow-sm"
            disabled={(date)=> !!firstDate && date<firstDate}
          />
        </div>
      </div>
    )
  }

export default AppDatePicker;