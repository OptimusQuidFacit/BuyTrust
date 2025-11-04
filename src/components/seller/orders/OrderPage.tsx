"use client"
import AppSelect from "@/components/appComponents/AppSelect";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/utility/TextInput";
import { CircleCheck, FileX2, ScrollIcon, Search } from "lucide-react";
import CustomDate from "./CustomDate";
import { useState } from "react";
import { useAppTable } from "@/lib/customHooks/useAppTable";
import { Orders } from "@/lib/dummyData";
import { orderColumns } from "./orderColumn";
import { AppDataTable } from "@/components/appComponents/AppDataTable";

const OrderPage = () => {
    const tableState = useAppTable({data:Orders, columns:orderColumns, rowIdKey:"id"})
    const [firstDate, setFirstDate] = useState<Date | undefined>()
    const [secondDate, setSecondDate] = useState<Date | undefined>()
    console.log({FIRST:firstDate, SECOND:secondDate})
    return (
        <div>
            <h1 className="text-xl font-semibold">
                Orders List
            </h1>
            <main className="text-xs mt-2">
                <div className="flex gap-2">
                    <Button variant="link" className="rounded-none flex gap-1 text-xs pb-1 hover:border-b-1 border-secondary">
                        <ScrollIcon size={12}/><p>Orders</p>
                    </Button>
                    <Button variant="link" className="rounded-none flex gap-1 text-xs pb-1 hover:border-b-1 border-secondary">
                        <FileX2 size={12}/>
                        <p>Unfulfilled</p>
                    </Button>
                    <Button variant="link" className="rounded-none flex gap-1 text-xs pb-1 hover:border-b-1 border-secondary">
                        <CircleCheck size={12}/>
                        <p>Paid</p> 
                    </Button>
                    
                </div>
                <div className="mt-1 flex gap-1 items-center">
                    <TextInput name="search" placeholder="Search" icon={<Search size={12}/>} className=" text-xs w-30 h-6"/>
                    <AppSelect className="bg-black text-white text-xs" label="Filter by duration" options={["Last seven days", "Last 30 days", "Last 90 days"]}/>
                    <CustomDate setFirstDate={setFirstDate} setSecondDate={setSecondDate}/>
                   { (firstDate||secondDate)&&
                   <div className="flex gap-2">
                        <p>Searching for</p>
                        <p className="text-xs font-bold underline">
                            {firstDate?.getFullYear()}-{firstDate?.getMonth()}-{firstDate?.getDate()}
                        </p>
                        <p>to</p>
                        <p className="text-xs font-bold underline">
                            {secondDate?.getFullYear()}-{secondDate?.getMonth()}-{secondDate?.getDate()}
                        </p>
                    </div>
                    }
                </div>
                <div className="mt-2">
                    <AppDataTable table={tableState.table} headerClassName="bg-secondary text-white text-xs"/>
                </div>
            </main>
        </div>
    );
}

export default OrderPage;