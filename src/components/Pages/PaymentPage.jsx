import { useParams } from "react-router-dom"
import upi from '../../assets/upi.png';
import card from '../../assets/card.png';
import bank from '../../assets/bank.png';

export default function PaymentPage () {

    const {total} = useParams();
    const numTotal = Number(total);

    return (
        <div className="p-6 my-12 w-fit min-w-4/10 text-center shadow-xl flex flex-col gap-3 mx-auto mt-9 rounded-2xl border-1 border-gray-400">
            <span className="text-3xl p-3 font-bold">Complete Payment</span>
            <span className="font-medium text-left">Select payment option: </span>
            <span className="flex flex-col gap-3 w-full mx-auto">
                <span className="duration-150 cursor-pointer border-1 rounded-sm hover:bg-gray-200"><img src={upi} className="h-18 p-3"/></span>
                <span className="duration-150 cursor-pointer border-1 rounded-sm hover:bg-gray-200"><img src={card} className="h-18 p-3" /></span>
                <span className="duration-150 cursor-pointer border-1 rounded-sm hover:bg-gray-200"><img src={bank} className="h-18 p-3" /></span>
            </span>
            <span className="text-2xl font-bold my-3">
                Total: $ {numTotal.toFixed(2)}
            </span>
        </div>
    )
}