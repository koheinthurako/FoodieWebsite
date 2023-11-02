import {IoRestaurant} from "react-icons/io5"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to={"/"}>
        <div className="flex bg-white w-36 rounded-xl shadow-lg py-2 justify-center items-center gap-3 my-8 px-5
        transition duration-100 mx-5 hover:scale-105">
            <IoRestaurant className="text-2xl text-pink-500"/>
            <p className="text-xl font-semibold text-pink-500">Foodie</p>
        </div>          
    </Link>
)
}

export default Navbar;