
import logo from '../assets/SS.png';
import { CiShoppingCart } from "react-icons/ci";


export default function Header () {
    return (
        <div className="bg-gray-200 p-3 text-red-600 flex flex-row items-center place-content-between">
            <div className='flex flex-row items-center'>
            <img src={logo} className='h-15 w-15'/>
            <span className='text-xl mx-2 font-light'>ShopSphere</span>
            </div>
            <span className='cursor-pointer bg-red-900 mx-4 text-white p-1 rounded hover:bg-white hover:text-red-600 text-2xl duration-300'><CiShoppingCart /></span>
        </div>
    )
}