
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="image flex flex-row text-left">
            <div className="my-40 mx-30 flex flex-col gap-3">
                <span className="text-white"><span className="text-6xl font-bold">ENTER!</span><br /><span className="text-3xl">the Sphere of</span><br /><span className="font-bold text-6xl">Endless Shopping Delights!</span></span>
                <Link className="bg-red-900 text-white p-3 rounded-xl" to="/products">Start Shopping</Link>
            </div>
            <div>

            </div>
        </div>
    )
}