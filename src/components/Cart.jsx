import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/cartSlice";

export default function Cart () {

    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const incrementHandler = (cartItemId) => {
        dispatch(increment(cartItemId));
    }

    const decrementHandler = (cartItemId) => {
        dispatch(decrement(cartItemId));
    }

    let content;

    if(cart.length === 0) {
        content = <>
            <span className="text-3xl mb-3">Cart is Empty!</span>
            <Link className="mx-auto duration-150 bg-red-900 w-fit text-white p-3 rounded-xl hover:border-1 hover:border-red-900 hover:bg-white hover:text-red-900" to="/products">Start Shopping Now!</Link>
        </>
    } else {
        content = <>
            
            <span className="text-3xl p-6">Cart 🛒</span>

            {cart.map((item, i) => <div key={i} className="rounded-xl flex flex-row text-center justify-between items-center gap-3 border-1 p-2">
                <img src={item.image} className="h-48" />
                <span>{item.title}</span>
                <span>{item.price}</span>
                <span className="flex flex-col">
                    <span>{item.count}</span>
                    <span className="flex flex-row justify-between gap-6">
                        <button onClick={() => incrementHandler(item.id)} className="bg-green-600 p-2 cursor-pointer">+</button>
                        <button onClick={() => decrementHandler(item.id)} className="bg-red-600 p-2 cursor-pointer">-</button>
                    </span>
                </span>
            </div>)}
        </>
    }

    return (
        <div className="p-6 w-6/10 text-center shadow-xl flex flex-col gap-3 mx-auto mt-9 rounded-2xl border-1 border-gray-400">
            {content}
        </div>
    )
}