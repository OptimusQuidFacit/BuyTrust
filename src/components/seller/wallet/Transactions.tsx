import TextInput from "@/components/utility/TextInput";
import { payments } from "@/lib/dummyData";
import { Search } from "lucide-react";

const Transactions = () => {
    return (
        <div className="py-2">
            <TextInput name="search" className="text-xs" placeholder="Search Transaction.." icon={<Search size={10}/>}/>
            <p className="text-xl font-semibold my-2">
                Transaction History
            </p>
            {
                payments.map(payment=>
                    <div key={payment.transactionId} className="flex gap-1 border-t-1 p-1">
                       <p className="text-xs flex-1">#{payment.transactionId}</p>
                       <p className="text-xs flex-1 font-semibold">{payment.order.product.name}</p>
                       <p className="text-xs flex-1">{payment.status}</p> 
                       <p className="text-xs flex-1 font-semibold">{payment.amount.toLocaleString("en-ng",{style:"currency", currency:"NGN"})}</p> 
                    </div>
                )
            }
        </div>
    );
}

export default Transactions;