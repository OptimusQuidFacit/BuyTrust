import Link from "next/link";

const SellerSummary = () => {
    return (
        <div>
            <header>
                <h2 className="font-semibold">
                    My Dashboard
                </h2>
            </header>
            <main className="flex flex-col mt-5 gap-5">
                <div className="flex gap-3 w-full flex-1">
                    <div className="  p-2 text-center flex-1 bg-primary rounded-xl  text-white">
                        <h3 className="font-semi-bold text-xs">
                             Your customers
                        </h3>
                    </div>
                    <div className="  p-2 text-center flex-1 bg-primary rounded-xl  text-white">
                        <h3 className="font-semi-bold text-xs">
                             Your Income
                        </h3>
                    </div>
                    <div className=" p-2 text-center flex-1 bg-primary rounded-xl text-white">
                        <h3 className="font-semi-bold text-xs">
                             Products Sold
                        </h3>
                    </div>
                </div>
                <div className="flex-2">
                    <h3 className="font-semibold text-sm">
                        Marketplace
                    </h3>
                    <div className="w-full mt-2 grid grid-cols-6 grid-rows-[repeat(2,120px)] justify-center gap-3">
                        <div className="rounded-xl p-5 bg-white col-span-4">
                            Chart 1
                        </div>
                        <div className="rounded-xl p-5 bg-white row-span-2 col-span-2">
                            Chart 2
                        </div>
                        <div className="rounded-xl p-5 bg-white col-span-4">
                            Chart 3
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-sm">
                            Recent Orders
                        </h3>
                        <Link className="text-secondary text-xs font-semibold hover:text-primary" href={`/seller/orders`}>
                            See all
                        </Link>

                    </div>
                    <div className="overflow-y-scroll max-h-[60px] pt-2">
                        <div className=" border-t-1 py-2 flex text-xs">
                            <p className="flex-1 font-semibold">#12451698</p>
                            <p className="flex-1">Iphone 13</p>
                            <p className="flex-1">September 16, 2021</p>
                            <p className="flex-1">$42.1</p>
                            <p className="flex-1 text-success">Delivered</p>
                        </div>
                        <div className=" border-t-1 py-1 flex text-xs">
                            <p className="flex-1 font-semibold">#12451698</p>
                            <p className="flex-1">Iphone 13</p>
                            <p className="flex-1">September 16, 2021</p>
                            <p className="flex-1">$42.1</p>
                            <p className="flex-1 text-success">Delivered</p>
                        </div>
                        <div className=" border-t-1 py-2 flex text-xs">
                            <p className="flex-1 font-semibold">#12451698</p>
                            <p className="flex-1">Iphone 13</p>
                            <p className="flex-1">September 16, 2021</p>
                            <p className="flex-1">$42.1</p>
                            <p className="flex-1 text-success">Delivered</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default SellerSummary;