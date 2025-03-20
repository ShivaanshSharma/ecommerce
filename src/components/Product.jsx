import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

export default function Product ({productData}) {

    const dispatch = useDispatch();

    const cartAddHandler = () => {
        const newCartProduct = {
            id: Math.random(),
            title: productData.title,
            price: productData.price,
            image: productData.image
        }

        dispatch(add(newCartProduct));
    }

    return (
        <div className="border-1 rounded-2xl p-2 text-center flex flex-col gap-1">
            <span>
                <img src={productData.image} className="h-48 mx-auto"  />
            </span>
            <span>
                {productData.title}
            </span>
            <span>
                {productData.price}
            </span>
            <span>
            ⭐{productData.rating.rate} ({productData.rating.count})
            </span>
            <span className="flex flex-col gap-1 text-white">
                <button className="cursor-pointer duration-150 bg-orange-300 rounded py-2 hover:bg-orange-200">Buy Now</button>
                <button onClick={cartAddHandler} className="cursor-pointer duration-150 bg-orange-400 rounded py-2 hover:bg-orange-300">Add to Cart</button>
            </span>
        </div>
    )
}