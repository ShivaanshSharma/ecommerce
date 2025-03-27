import { useEffect, useState } from "react"
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { initialLoading, sayHello } from "../store/productsSlice";

export default function ProductsPage() {

    const [category, setCategory] = useState('default');

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const resData = await response.json();
            dispatch(initialLoading(resData));
        }
        fetchData();
    }, []);

    const categoryChangeHandler = (e) => {
        setCategory(e.target.value);
    }

    let filteredList = products;

    if (category !== 'default') {
        filteredList = products.filter((item) => item.category === category);
    }

    return (
        <>
        <div className="text-left w-7/10 mx-auto my-6">
            <select onChange={categoryChangeHandler} name="category" id="category" className="border-1 rounded p-2">
                    <option value="default">Select a Category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
        <div className="w-7/10 mx-auto my-6 grid grid-flow-row  gap-6 lg:grid-cols-3 sm:grid-cols-1">
            {filteredList?.map((product, index) => <Product key={index} productData={product} />)}
        </div>
        </>
    )
}