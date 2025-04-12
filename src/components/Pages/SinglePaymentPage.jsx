import { useLocation, useParams } from "react-router-dom"
import upi from '../../assets/upi.png';
import card from '../../assets/card.png';
import bank from '../../assets/bank.png';

export default function SinglePaymentPage () {

    const {state} = useLocation();
    console.log(state);

    const {price} = useParams();
    const numPrice = Number(price);

    return (
        <div className="p-6 my-12 w-fit min-w-4/10 text-center shadow-xl flex flex-col gap-3 mx-auto mt-9 rounded-2xl border-1 border-gray-400">
            <span className="text-3xl p-3 font-bold">Complete Payment</span>
            <span>
                <img src={state.image} className="h-64 mx-auto"/>
            </span>
            <span className="font-medium text-left">Select payment option: </span>
            <span className="flex flex-col gap-3 w-full mx-auto">
                <span className="duration-150 cursor-pointer border-1 rounded-sm hover:bg-gray-200"><img src={upi} className="h-18 p-3"/></span>
                <span className="duration-150 cursor-pointer border-1 rounded-sm hover:bg-gray-200"><img src={card} className="h-18 p-3" /></span>
                <span className="duration-150 cursor-pointer border-1 rounded-sm hover:bg-gray-200"><img src={bank} className="h-18 p-3" /></span>
            </span>
            <span className="text-2xl font-bold my-3">
                Total: $ {numPrice.toFixed(2)}
            </span>
        </div>
    )
}