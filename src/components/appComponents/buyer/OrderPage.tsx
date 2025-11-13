"use client"

import { useAppTable } from "@/lib/customHooks/useAppTable";
import { Orders } from "@/lib/dummyData";
import { orderColumns } from "./Orders/OrderColumn";
import { AppDataTable } from "../AppDataTable";
import TextInput from "@/components/utility/TextInput";
import { Search } from "lucide-react";

const OrderPage = () => {
    const tableState= useAppTable({data:Orders.filter(order=>order.status=="pending"||order.status=="shipped"), columns:orderColumns, rowIdKey:"id"})
    return (
        <div className="">
            <TextInput onChange={(e)=>tableState.table.getColumn("productName")?.setFilterValue(e.target.value)} className="text-xs my-2" placeholder="Search Order" name="search" icon={<Search size={8}/>}/>
            <AppDataTable table={tableState.table} headerClassName="bg-secondary text-white font-bold text-xs" rowClassName="bg-secondary text-white text-xs"/>        
        </div>
    );
}

export default OrderPage;