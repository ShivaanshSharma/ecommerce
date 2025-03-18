import { CiStar } from "react-icons/ci";

export default function Product ({productData}) {
    return (
        <div className="border-1 rounded-2xl p-3 text-center flex flex-col gap-1">
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
            <span className="flex flex-col gap-1">
                <button className="cursor-pointer duration-150 bg-orange-300 rounded py-2 hover:bg-orange-200">Buy Now</button>
                <button className="cursor-pointer duration-150 bg-orange-400 rounded py-2 hover:bg-orange-300">Add to Cart</button>
            </span>
        </div>
    )
}