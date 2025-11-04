"use client"
import { AdComboBox} from "@/components/seller/ads/AdComboBox";
import { useAppTable } from "@/lib/customHooks/useAppTable";
import { products } from "@/lib/dummyData";
import { ChartColumnIncreasing, Megaphone, Search } from "lucide-react";
import { BiCaretDown } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { productColumns } from "./productColumn";
import { AppDataTable } from "@/components/appComponents/AppDataTable";

const AdPage = () => {

      const tableState= useAppTable({data:products, columns:productColumns, rowIdKey:"id"});
      console.log(tableState.columnFilters);
    
    return (
        <div className="p-5">
            <header className="flex justify-between items-center">
                <div className="flex gap-2 text-xs flex-1">
                    <div className="rounded-lg shadow-xl p-2 bg-white flex-1">
                        
                        <p className="font-bold">
                            Your Views
                        </p>
                        <div className="mt-1 flex justify-between">
                            <p className="flex gap-[0.5] items-center">50%
                                <BiCaretDown color="red"/>
                            </p>
                            <BsGraphUp color="green"/>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl p-2 bg-white flex-1">
                        <p className="font-bold">
                            Your Impressions
                        </p>
                        <div className="flex justify-between mt-1">
                            <p className="flex gap-[0.5] items-center">
                                26%
                                <BiCaretDown color="red"/>
                            </p>
                            <ChartColumnIncreasing color="green" size={12}/>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl p-2 bg-white flex-1">
                        <p className="font-semibold">
                            Your Ads
                        </p>
                        <div className="flex justify-between mt-1">
                            <p className="flex gap-[0.5] items-center">
                                2
                                <BiCaretDown color="red"/>
                            </p>
                            <Megaphone size={12}/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 flex-1">
                    <AdComboBox table={tableState.table} icon={<Search/>}/>
                </div>
            </header>
            <main className="mt-5 max-w-[800px]">
                {/* <AppDataTable columns={productColumns} data={products}/> */}
                    <AppDataTable table={tableState.table}  headerClassName="bg-primary text-white text-xs" rowClassName=" cursor-pointer text-xs"/>
                
            </main>
            
        </div>
    );
}

export default AdPage;