import Menu from "@/components/seller/Menu";
import PriceDetails from "@/components/seller/PriceDetails";
import SellerSummary from "@/components/seller/SellerSummary";

export default function RootLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-primary lg:p-10 p-5 w-screen h-screen">
            <div className="flex rounded-xl bg-lightgrey h-full w-full">
                
                <nav className="border-r-1 py-5 px-1 flex-[1]">
                    <Menu/>
                </nav>
                <main className="flex-[4]">
                    {/* <SellerSummary/> */}
                    {children}
                </main>
                {/* <div className=" border-l-1 p-5 flex-[2]">
                    <PriceDetails/>
                </div> */}
            </div>
        </div>
    );
}

// export default page;