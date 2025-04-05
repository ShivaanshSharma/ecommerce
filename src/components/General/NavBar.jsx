
import { NavLink } from "react-router-dom"

export default function NavBar () {
    return (
        <div>
            <ul className="flex items-center bg-red-900 text-white text-xs shadow-md gap-3">
                <li className="hover:text-red-900 hover:bg-white duration-150 p-3 ml-3"><NavLink className={({isActive}) => isActive ? 'underline' : null} to="/" end>Home</NavLink></li>
                <li className="duration-150 p-3 hover:text-red-900 hover:bg-white"><NavLink className={({isActive}) => isActive ? 'underline' : null} to="/products">Products</NavLink></li>
                {/* <li className="duration-150 p-3 hover:text-red-900 hover:bg-white"><NavLink className={({isActive}) => isActive ? 'underline' : null} to="/ecommerce/contact">Contact Us</NavLink></li>
                <li className="duration-150 p-3 hover:text-red-900 hover:bg-white"><NavLink className={({isActive}) => isActive ? 'underline' : null} to="/ecommerce/about">About Us</NavLink></li> */}
            </ul>
        </div>
    )
}