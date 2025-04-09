
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/Slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Product ({productData}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart.cart);

    const [response, setResponse] = useState('Add to cart');

    let count = 1;

    const addedToCart = () => {
        setResponse('Added!');
        setTimeout(() => {setResponse('Add to cart')}, 1500);
    }

    const cartAddHandler = (event) => {
        event.stopPropagation();
        
        const found = cart.find(item => item.id === productData.id);
        if (found) {
            setResponse('Item already in cart!');
            setTimeout(() => setResponse('Add to cart'), 1500);
        } else {
            addedToCart();
            const newCartProduct = {
                id: productData.id,
                title: productData.title,
                price: productData.price,
                image: productData.image,
                count: 1,
            }
            dispatch(add(newCartProduct));
        }
    }

    const productClickHandler = () => {
        navigate(`/products/${productData.id}/${productData.title}/${productData.price}`, { state:  { image: `${productData.image}`, desc: `${productData.description}` } });
    }

    return (
        <div onClick={productClickHandler} className="cursor-pointer duration-150 border-1 rounded-2xl p-2 text-center flex flex-col justify-between gap-2 hover:bg-gray-200">
            <span>
                <img src={productData.image} className="h-48 mx-auto"  />
            </span>
            <span className="font-light">
                {productData.title}
            </span>

            <span>
            ⭐{productData.rating.rate} ({productData.rating.count})
            </span>
            <span className="text-2xl font-bold">
                $ {productData.price}
            </span>
            <span className="flex flex-col gap-1 text-white">
                <button className="cursor-pointer duration-150 bg-orange-300 rounded py-2 hover:bg-orange-200">Buy Now</button>
                <button onClick={cartAddHandler} className={`${response === 'Add to cart' ? null : 'font-bold'} cursor-pointer duration-150 bg-orange-400 rounded py-2 hover:bg-orange-300`}>{response}</button>
            </span>
        </div>
    )
}