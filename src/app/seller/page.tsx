import Menu from "@/components/seller/Menu";
import PriceDetails from "@/components/seller/PriceDetails";
import SellerSummary from "@/components/seller/SellerSummary";

const page = () => {
    return (
            <div className="flex h-full w-full">                           
                <main className="p-5 flex-[2]">
                    <SellerSummary/>
                </main>
                <div className=" border-l-1 p-5 flex-[1]">
                    <PriceDetails/>
                </div>
            </div>
    );
}

export default page;