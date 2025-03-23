import { Link } from "react-router-dom";


export default function ErrorPage() {
    return (
        <div className="w-100% p-6 bg-gray-200 text-center">
            <h1 className="text-2xl mb-3">Page not found!</h1>
            <Link to="/ecommerce" className="duration-150 bg-red-900 rounded p-2 text-xs text-white hover:bg-white hover:text-red-900">Home</Link>
        </div>
    )
}