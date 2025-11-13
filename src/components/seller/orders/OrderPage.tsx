"use client"
import AppSelect from "@/components/appComponents/AppSelect";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/utility/TextInput";
import { CircleCheck, FileX2, ScrollIcon, Search } from "lucide-react";
import CustomDate from "./CustomDate";
import { useEffect, useState } from "react";
import { useAppTable } from "@/lib/customHooks/useAppTable";
import { Orders } from "@/lib/dummyData";
import { orderColumns } from "./orderColumn";
import { AppDataTable } from "@/components/appComponents/AppDataTable";
import moment from "moment";
import { FcClearFilters } from "react-icons/fc";
import AppToolTip from "@/components/appComponents/AppToolTip";
import { daysAgoDate } from "@/lib/utils";



const OrderPage = () => {
    const tableState = useAppTable({data:Orders, columns:orderColumns, rowIdKey:"id"})
    const [firstDate, setFirstDate] = useState<Date | undefined>()
    const [secondDate, setSecondDate] = useState<Date | undefined>()
    const [selectValue, setSelectValue] = useState<number|string>("")

    useEffect(() => {
        (firstDate&&secondDate)&&tableState.table.getColumn("timeStamp")?.setFilterValue([firstDate, secondDate])
    
    //   return () => {
    //     second
    //   }
    }, [firstDate, secondDate])
    useEffect(() => {
        selectValue!==""?(dateSelectFilter(parseInt(selectValue as string))):clearDateFilter()
    
    
    }, [selectValue])
    
    

    const dateSelectFilter=(days:number)=>{
        setFirstDate(daysAgoDate(days))
        setSecondDate(moment().toDate())
    }

    // const isBetween=(date:Date)=> {
    //     const momentDate= moment(date)
    //     const fallsBetween = momentDate.isBetween(moment(firstDate), moment(secondDate))
    //     return fallsBetween;
    // }

    //Returns an array of curent date and date from days ago
   
    console.log(firstDate, secondDate);

    const clearDateFilter=()=>{
        tableState.table.getColumn("timeStamp")?.setFilterValue(undefined)
        setFirstDate(undefined);
        setSecondDate(undefined);
        setSelectValue("");
    }

    const toggleFilter = (columnId: string, targetValue: any) => {
        const col = tableState.table.getColumn(columnId);
        const current = col?.getFilterValue();
        const isSame =
          Array.isArray(current) && Array.isArray(targetValue)
            ? current.length === targetValue.length &&
              targetValue.every((v) => current.includes(v))
            : current === targetValue;
      
        col?.setFilterValue(isSame ? undefined : targetValue);
      };

    const filterCheck=(columnId:string, value:any, returnAll?:boolean)=>{
        const columnFilter=tableState.columnFilters.find(f => f.id === columnId);
        if(!columnFilter&&returnAll) return true
        if (!columnFilter) return false

        const filterValue = columnFilter.value as Array<string>;
       // If the filter value is an array (like ["pending", "shipped"])
        if (Array.isArray(filterValue)) {
            if(Array.isArray(value)){
                return value.every(f=>filterValue.includes(f))
            }
            return filterValue.includes(value)
        }

        // If it's a string (like "Laptop")
        return filterValue === value

    }

    // console.log(tableState.columnFilters.find(f => f.id === "paymentStatus"))
    return (
        <div>
            <h1 className="text-xl font-semibold">
                Orders List
            </h1>
            <main className="text-xs mt-2">
                <div className="flex gap-2">
                    <Button onClick={()=>toggleFilter("status", undefined)} variant="link" className={`rounded-none flex gap-1 text-xs pb-1 hover:border-b-1 border-secondary ${filterCheck("status",undefined, true)&&"border-b-1"}`}>
                        <ScrollIcon size={12}/><p>Orders</p>
                    </Button>
                    <Button onClick={()=>toggleFilter("status", ["pending", "shipped"])} variant="link" className={`rounded-none flex gap-1 text-xs pb-1 hover:border-b-1 border-secondary ${filterCheck("status",["shipped", "pending"])&&"border-b-1"}`}>
                        <FileX2 size={12}/>
                        <p>Unfulfilled</p>
                    </Button>
                    <Button onClick={()=>toggleFilter("paymentStatus", ["escrowed", "released"])} variant="link" className={`rounded-none flex gap-1 text-xs pb-1 hover:border-b-1 border-secondary ${filterCheck("paymentStatus", ["escrowed"])&&"border-b-1"}`}>
                        <CircleCheck size={12}/>
                        <p>Paid</p>
                    </Button>
                    
                </div>
                <div className="mt-1 flex gap-1 items-center">
                    <TextInput onChange={(e)=>tableState.table.getColumn("productName")?.setFilterValue(e.target.value)} name="search" placeholder="Search" icon={<Search size={12}/>} className=" text-xs w-30 h-6"/>
                    <AppSelect selectValue={selectValue} onChange={(e)=>setSelectValue(e.target.value)} className="bg-black text-white text-xs" label="Filter by duration" options={[{name:"Last seven days", value:7}, {name:"Last 30 days", value:30}, {name:"Last 90 days", value:90}]}/>
                    <CustomDate firstDate={firstDate} secondDate={secondDate} setFirstDate={setFirstDate} setSecondDate={setSecondDate}/>
                   { (firstDate||secondDate)&&
                   <div className="flex gap-2">
                        <p>Searching for</p>
                        <p className="text-xs font-bold underline">
                            {firstDate&&`${firstDate.getFullYear()}-${firstDate?.getMonth()+1}-${firstDate?.getDate()}`}
                        </p>
                        <p>to</p>
                        <p className="text-xs font-bold underline">
                            {secondDate&&`${secondDate?.getFullYear()}-${secondDate?.getMonth()+1}-${secondDate?.getDate()}`}
                        </p>
                    </div>
                    }
                    <AppToolTip tip="Clear Date Filter">
                        <Button variant="outline" className="text-xs" onClick={()=>clearDateFilter()}>
                            <FcClearFilters/>
                        </Button>
                    </AppToolTip>
                </div>
                <div className="mt-2">
                    <AppDataTable table={tableState.table} headerClassName="bg-secondary text-white text-xs" rowClassName="text-xs cursor-pointer"/>
                </div>
            </main>
        </div>
    );
}

export default OrderPage;