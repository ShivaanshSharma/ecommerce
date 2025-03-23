import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom"
import { add } from "../store/cartSlice";

export default function ProductDetail () {

    const dispatch = useDispatch();

    const {productId, title, price } = useParams();
    const {state} = useLocation();

    let count = 1;

        const cartAddHandler = (event) => {
            event.stopPropagation();
            const newCartProduct = {
                id: Number(productId),
                title: title,
                price: Number(price),
                image: state.image,
                count: 1,
            }
            dispatch(add(newCartProduct));
        }

    return (
        <div className=" w-fit max-w-8/10 mx-auto border-1 border-gray-400 shadow-xl rounded p-3 my-6 flex flex-row gap-3">
            <span className="flex-2/6 flex justify-center">
                <img className="w-full" src={state.image} />
            </span>
            <span className="flex flex-col gap-6 text-center justify-center flex-4/6">
                <span className="font-bold">{title}</span>
                <span>{state.desc}</span>
                <span className="font-bold text-2xl">$ {price}</span>

                <span className="flex flex-col gap-1 text-white">
                    <button className="cursor-pointer duration-150 bg-orange-300 rounded py-2 hover:bg-orange-200">Buy Now</button>
                    <button onClick={cartAddHandler} className="cursor-pointer duration-150 bg-orange-400 rounded py-2 hover:bg-orange-300">Add to Cart</button>
                </span>
            </span>
        </div>
    )
}