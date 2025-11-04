import { ArrowDown, ArrowUp, Plus } from "lucide-react";
import Link from "next/link";
import Button from "../utility/Button";
import { FaSalesforce } from "react-icons/fa";

const PriceDetails = () => {
    return (
        <div className="">
            <h1 className="font-semibold">
                Summary
            </h1>
            <div className="mt-5 rounded-xl bg-white p-3 relative">
                <Link href={'/'}>
                    {/* <Button  className="rounded-[50%] w-[20px] h-[20px]" icon={<Plus size={12}/>}/> */}
                    <button className="text-white cursor-pointer w-7 h-7 rounded-[50%] bg-secondary absolute top-1/2 right-0 -translate-y-[50%] translate-x-[50%]">
                        <Plus size={12} className="mx-auto"/>
                    </button>
                </Link>
                <h2 className="text-xs">
                    Your Balance
                </h2>
                <p className="mt-2 text-xl font-semibold">
                    N400, 0000
                </p>
                <div className="mt-2 flex justify-between items-center">
                    <p className="flex gap-1 items-center text-xs">
                        <ArrowDown color="red" size={12}/> N40, 000 
                    </p>
                    <p className="flex gap-1 items-center text-xs">
                        <ArrowUp color="green" size={12}/> N52, 000 
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex justify-between">
                    <p className="text-xs font-semibold">
                        Activity
                    </p>
                    <Link className="text-xs font-semibold text-unhighlight hover:text-secondary" href={`/`}> See All</Link>
                </div>
                <div className="mt-5">
                    <div className="flex border-t-1 items-center p-2 justify-between">
                        <div className="flex gap-1 flex-1 items-center">
                            <div className="p-2 rounded-lg bg-primary">
                                <FaSalesforce color="white" size={15}/>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">
                                    Website Tax
                                </p>
                                <p className="text-unhighlight text-xs">
                                    Sunday, 16 October
                                </p>
                            </div>

                        </div>
                        <p className="text-xs flex items-center">
                            <Plus color="green" size={10}/>N40, 000.00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceDetails;