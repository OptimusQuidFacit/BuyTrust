"use client"
import Image from "next/image";
import { CiDeliveryTruck, CiSaveDown1 } from "react-icons/ci";
import Link from "next/link";
import { businessName } from "@/lib/data";
import { usePathname } from "next/navigation";
// import Button from "../utility/Button";
import { BiPurchaseTag } from "react-icons/bi";





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
        if(link!=="/buyer"){

            return pathName.startsWith(link)?true:false;
        } 
        return pathName===link?true:false;    
        


        // return pathName===link?true:false;
    }
    console.log(pathName, isCurrentPage("/seller/ads"));
    const menuItems= [
        {
        name:"My Orders",
        icon:<CiDeliveryTruck />,
        link: "/buyer"
        },
        {
        name:"Saved Items",
        icon:<CiSaveDown1 />,
        link: "/buyer/saved"

        },
        {
        name:"Purchases",
        icon:<BiPurchaseTag/>,
        link: "/buyer/purchase"
        },

        ]
    return (
        <div className="w-max-[200px] h-full rounded-l-xl p-3 flex flex-col justify-between items-center bg-gradient-to-r from-primary to-secondary">
            <header className="flex gap-2 items-center">
                <div className="relative w-[20px] h-[20px] my-5">
                    <Image className="object-cover" fill src={'/icon.png'} alt="Logo for the business"/>
                </div>
                <h1 className="font-semibold">{businessName}</h1>
            </header>
            <div className="p-2 rounded-xl bg-white w-full">
                {
                    menuItems.map(item=>
                      <Link key={item.link} className={`flex gap-3 text-sm my-5 hover:text-black hover:font-semibold ${isCurrentPage(item.link)?"text-black font-semibold":"text-unhighlight"}`} href={item.link}>
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