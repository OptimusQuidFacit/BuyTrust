import { clsx, type ClassValue } from "clsx"
import moment from "moment";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//Ensure non-zero indexed months
export const enhanceDate = (date: Date) => {
  return {
    original: date,
    getYear: () => date.getFullYear(),
    getMonth: () => date.getMonth() + 1, // 1-indexed month
    getDay: () => date.getDate(),
    toYMD: () => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    },
    toReadable: () => date.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" }),
  };
};

 export const daysAgoDate=(daysAgo:number)=>{
        const date = moment().subtract(daysAgo, "days").toDate()
        // const end = moment().toDate()
        return date;
    }

