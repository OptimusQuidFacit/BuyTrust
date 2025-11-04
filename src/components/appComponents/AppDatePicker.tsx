import { Calendar } from "@/components/ui/calendar"
import { Dispatch, SetStateAction, useState } from "react";
import { DateRange } from "react-day-picker";

type props={
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

  export const TwoDatePickers = ({setFirstDate, setSecondDate}:props) => {
    
  
    return (
      <div className="fixed bottom-6 right-6 md:flex gap-6">
        <div>
          <p className="text-sm font-medium mb-2">From:</p>
          <Calendar
            mode="single"
            onSelect={setFirstDate}
            className="rounded-lg border shadow-sm"
          />
        </div>
  
        <div className="mt-2 md:mt-0">
          <p className="text-sm font-medium mb-2">To:</p>
          <Calendar
            mode="single"
            onSelect={setSecondDate}
            className="rounded-lg border shadow-sm"
          />
        </div>
      </div>
    )
  }

export default AppDatePicker;