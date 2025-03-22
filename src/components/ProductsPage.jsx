import { useEffect, useState } from "react"
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { initialLoading, sayHello } from "../store/productsSlice";
import { useLocation } from "react-router-dom";

export default function ProductsPage() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const resData = await response.json();
            console.log(resData);
            dispatch(initialLoading(resData));
        }
        fetchData();
    }, [location]);

    return (
        <div className="w-7/10 mx-auto my-12 grid grid-flow-row grid-cols-3 gap-6">
            {products?.map((product, index) => <Product key={index} productData={product} />)}
        </div>
    )
}