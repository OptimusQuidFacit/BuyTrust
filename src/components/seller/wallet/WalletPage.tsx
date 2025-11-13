"use client"
import AppSelect from "@/components/appComponents/AppSelect";
import { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import Transactions from "./Transactions";

const WalletPage = () => {
    const [selectValue, setSelectValue] = useState<number|string>("")
    return (
        <div>
            <div className="md:flex gap-2">
                <div className="flex-1 -xl p-5 bg-white rounded-xl h-[500px]">
                    <div className="flex justify-between">
                        <div className="mt-2">
                            <p className="font-semibold text-xs ">My balance</p>
                            <p className="font-semibold text-xl inline-block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                {(1400000).toLocaleString("en-ng", {style:"currency", currency:"NGN"})}
                            </p>
                        </div>
                        <div className="mt-2">
                            <p className="font-semibold text-xs text-unhighlight">Escrowed balance</p>
                            <p className="font-semibold text-xl inline-block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                {(200000).toLocaleString("en-ng", {style:"currency", currency:"NGN"})}
                            </p>
                        </div>
                        {/* <AppSelect className="text-xs text-white bg-black" options={[{name:"Weekly", value:"weekly"}, {name:"Monthly", value:"monthly"}]} selectValue={selectValue} onChange={(e)=>setSelectValue(e.target.value)}/> */}
                    </div>
                    <div className="h-[300px]">
                        Chart
                    </div>
                
                </div>
                <div className="flex-1 p-3 bg-white rounded-xl">
                    <Transactions/>
                </div>
            </div>
        </div>
    );
}

export default WalletPage;