import Menu from "../../components/appComponents/buyer/Menu";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className=" h-screen p-5 bg-lightgrey">
            <div className="flex rounded-xl bg-white h-full">
                <nav className=" flex-1">
                    <Menu/>
                </nav>
                <main className="flex-4">
                    <div className="border-b-2 border-secondary  flex justify-between ">
                        <div>
                            <p className="font-semibold text-xs p-2 border-secondary border-r-2">Your Id: <span className="font-normal">#5422345</span></p>
                        </div>
                        <div>
                            <p className="font-semibold text-xs p-2 border-secondary border-l-2">Buyer Score: <span className="font-normal">47</span></p>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default layout;