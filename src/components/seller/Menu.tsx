"use client"
import Image from "next/image";
import { FaChartPie } from "react-icons/fa6";
import { FcAdvertising } from "react-icons/fc";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";
import { businessName } from "@/lib/data";
import { usePathname } from "next/navigation";
import Button from "../utility/Button";
import { LogOut } from "lucide-react";





const Menu = () => {
    const pathName=usePathname()
    const isOnAdmin= ()=>{
        return pathName.startsWith('/admin')?true:false;
    }
    const isCurrentPage=(link:string)=>{
        // if(link.startsWith("/admin")){
        
        //     return pathName.startsWith(link)?true:false;
        // }   
        //exception for home directory
        if(link!=="/seller"){

            return pathName.startsWith(link)?true:false;
        } 
        return pathName===link?true:false;      
        


        // return pathName===link?true:false;
    }
    console.log(pathName, isCurrentPage("/seller/ads"));
    const menuItems= [
        {
        name:"Summary",
        icon:<FaChartPie />,
        link: "/seller"
        },
        {
        name:"My Ads",
        icon:<FcAdvertising />,
        link: "/seller/ads"

        },
        {
        name:"Pending Delivery",
        icon:<CiDeliveryTruck />,
        link: "/seller/summary/delivery"
        },
        {
        name:"Wallet",
        icon:<FaWallet />,
        link: "/seller/summary/wallet"

        },

        ]
    return (
        <div className="w-max-[200px] h-full bg-lightgrey p-3 flex flex-col justify-between">
            <header className="flex gap-2 items-center">
                <div className="relative w-[20px] h-[20px] my-5">
                    <Image className="object-cover" fill src={'/icon.png'} alt="Logo for the business"/>
                </div>
                <h1 className="font-semibold">{businessName}</h1>
            </header>
            <div>
                {
                    menuItems.map(item=>
                      <Link key={item.link} className={`flex gap-3 text-sm my-2 hover:text-black hover:font-semibold ${isCurrentPage(item.link)?"text-black font-semibold":"text-unhighlight"}`} href={item.link}>
                        {item.icon}
                        <p>
                            {item.name}
                        </p>

                      </Link>  
                    )
                }
            </div>
            <footer className="justify-end">
                <div className="rounded-1/2 flex gap-3 text-sm">
                    <div className="rounded-1/2 relative w-4 h-5">
                        <Image fill src={"/vercel.svg"} alt={"user profile"}/>
                    </div>
                    <p>John Doe</p>
                    {/* <Button icon={<LogOut/>}/> */}

                </div>
            </footer>

        </div>
    );
}

export default Menu;