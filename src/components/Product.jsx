
export default function Product ({productData}) {
    return (
        <div className="border-1 p-3 rounded-2xl text-center h-fit w-48 flex flex-col">
            <span>
                <img src={productData.image} className="mx-auto h-auto w-48" />
            </span>
            <span>
                {productData.title}
            </span>
            <span>
                {productData.price}
            </span>
            <span>
                {productData.rating.rate}, {productData.rating.count}
            </span>
        </div>
    )
}