
import logo from '../../assets/newlogo-bg.png';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";


export default function Header () {

    return (
        <div className=" bg-gray-200 p-3 text-red-900 flex flex-row items-center justify-between ">
            <div className='flex flex-row items-center'>
            {/* <img src={logo} className='h-15 w-15'/> */}
            <span className='cursor-pointer duration-150 text-xl font-boldonse p-3 title-font flex flex-row hover:text-red-800'><span>ShopSphere</span></span>
            </div>
            <span className='cursor-pointer bg-red-900 mx-4 text-white p-1 rounded hover:bg-white hover:text-red-600 text-2xl duration-300'><Link to='/Cart'><CiShoppingCart /></Link></span>
        </div>
    )
}