
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="image flex flex-row text-left">
            <div className="my-20 lg:my-40 mx-10 lg:mx-30 flex flex-col gap-4">
                <span className="text-white"><span className="text-6xl font-bold">ENTER!</span><br /><span className="text-3xl">the Sphere of</span><br /><span className="font-bold text-6xl">Endless Shopping Delights!</span></span>
                <Link className="duration-150 bg-red-900 w-fit text-white p-3 rounded-xl hover:bg-white hover:text-red-900" to="/ecommerce/products">Start Shopping Now</Link>
            </div>
            <div>

            </div>
        </div>
    )
}