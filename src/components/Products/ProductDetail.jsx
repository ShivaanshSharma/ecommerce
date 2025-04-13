import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { add } from "../../store/Slices/cartSlice"
import Product from "./Product";
import { useState } from "react";

export default function ProductDetail () {

    const [response, setResponse] = useState("Add to cart");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state => state.products.products);
    const cart = useSelector(state => state.cart.cart);

    console.log(products);

    const {productId, price } = useParams();
    const {state} = useLocation();

    const addToCartHandler = () => {
        setResponse("Added!");
        setTimeout(() => setResponse("Add to cart"), 1500)
    }

    let count = 1;

        const cartAddHandler = (event) => {
            event.stopPropagation();

            const found = cart.find(item => item.id === Number(productId));
            
            if (found) {
                setResponse("Item already in cart!");
                setTimeout(() => setResponse("Add to cart"), 1500);
            } else {
                addToCartHandler();
    
                const newCartProduct = {
                    id: Number(productId),
                    title: title,
                    price: Number(price),
                    image: state.image,
                    count: 1,
                }
                dispatch(add(newCartProduct));
            }
        }

        const buyHandler = (event) => {
            event.stopPropagation();
     
            navigate(`/payment/${productId}/${price}`, { state: { image: state.image } })
        }

    return (
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-fit max-w-8/10 mx-auto shadow my-6  gap-3">
            <span className="flex-10/12 border-1 border-gray-400 p-3 rounded-xl h-fit">
                <span className="flex-2/6 flex justify-center">
                    <img className="h-64" src={state.image} />
                </span>
                <span className="flex flex-col gap-6 text-center justify-center flex-4/6">
                    <span className="font-bold mt-3 text-xl">{state.title}</span>
                    <span>{state.desc}</span>
                    <span className="font-bold text-2xl">$ {price}</span>

                    <span className="flex flex-col gap-1 text-white">
                        <button onClick={buyHandler} className="cursor-pointer duration-150 bg-orange-300 rounded py-2 hover:bg-orange-200">Buy Now</button>
                        <button onClick={cartAddHandler} className={`${response !== 'Add to cart' ? 'font-bold' : null} cursor-pointer duration-150 bg-orange-400 rounded py-2 hover:bg-orange-300`}>{response}</button>
                    </span>
                </span>
            </span>
            <span className="flex-4/12 text-center flex flex-col gap-3 border-1 border-gray-400 p-3 shadow rounded-xl h-fit">
                
                <span className="text-3xl font-bold my-3 explore">Explore more<br></br>products</span>
                {products?.map((product, index) => <Product key={index} productData={product} />)}
            </span>
        </div>
    )
}