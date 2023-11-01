import {IoRestaurant} from "react-icons/io5"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to={"/"}>
        <div className="flex items-center gap-3 my-8">
            <IoRestaurant className="text-2xl text-pink-500"/>
            <p className="text-xl font-semibold text-pink-500">Foodie</p>
        </div>          
    </Link>
)
}

export default Navbar;