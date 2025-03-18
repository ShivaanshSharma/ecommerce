import { useEffect, useState } from "react"
import Product from "./Product";

export default function ProductsPage() {

    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const resData = await response.json();
            console.log(resData);
            setProducts(resData);
        }
        fetchData();
    }, []);

    return (
        <div className="w-7/10 mx-auto my-12 grid grid-flow-row grid-cols-3 gap-6">
            {products?.map((product) => <Product productData={product} />)}
        </div>
    )
}