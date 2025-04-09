import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/Slices/cartSlice";

export default function Cart () {

    const cart = useSelector(state => state.cart.cart);
    const total = useSelector(state => state.cart.total)
    const dispatch = useDispatch();

    const incrementHandler = (cartItemId) => {
        dispatch(increment(cartItemId));
    }

    const decrementHandler = (cartItemId) => {
        dispatch(decrement(cartItemId));
    }

    console.log(total);

    let content;

    if(cart.length === 0) {
        content = <>
            <span className="text-3xl">Cart is Empty!</span>
            <Link className="mx-auto duration-150 bg-red-900 w-fit text-white p-3 rounded-xl hover:border-1 hover:border-red-900 hover:bg-white hover:text-red-900" to="/products">Start Shopping Now!</Link>
        </>
    } else {
        content = <>
            
            <span className="text-3xl p-3 font-bold">Cart 🛒</span>

            {cart.map((item, i) => <div key={i} className="sm:flex-row rounded-xl flex flex-col text-center justify-between items-center gap-6 border-1 p-2">
                <img src={item.image} className="h-48" />
                <span>{item.title}</span>
                <span className="font-bold text-xl">$ {item.price}</span>
                <span className="flex flex-col gap-3">
                    <span className="font-bold text-xl">{item.count}</span>
                    <span className="flex flex-row justify-between gap-6">
                        <button onClick={() => incrementHandler(item.id)} className="duration-150 rounded hover:bg-white border-1 hover:border-green-600 hover:text-green-600 text-white bg-green-600 cursor-pointer px-3 py-2">+</button>
                        <button onClick={() => decrementHandler(item.id)} className="duration-150 rounded hover:bg-white border-1 hover:border-red-600 hover:text-red-600 text-white bg-red-600 cursor-pointer px-3 py-2">-</button>
                    </span>
                </span>
            </div>)}
            <div className="text-3xl font-bold">
                Total: $ {total.toFixed(2)}
            </div>
            <div>
                <button className="duration-150 py-3 px-12 bg-green-400 rounded-xl text-white border-1 cursor-pointer hover:border-green-400 hover:bg-white hover:text-green-400">Checkout</button>
            </div>
        </>
    }

    return (
        <div className="p-6 my-12 w-fit min-w-4/10 text-center shadow-xl flex flex-col gap-6 mx-auto mt-9 rounded-2xl border-1 border-gray-400">
            {content}
        </div>
    )
}