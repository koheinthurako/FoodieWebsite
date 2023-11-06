import {IoEyeSharp} from "react-icons/io5";
import { Link } from "react-router-dom";

// ဟိုဘက်က rendering လုပ်ဖို့ data လှမ်းပေးလိုက်တဲ့အခါ ဒီဘက်က အောက်ကလို () ထဲမှာ meal ကို {} ထဲထည့်ပြီးပြန်သုံးပေးရတယ်
const Card = ({meal}) => {
  return (
    <Link to={`/detail/${meal.idMeal}`}>
        <div className="w-64 bg-slate-50 flex justify-top items-center flex-col p-5 rounded-xl gap-5 cursor-pointer
        relative h-[400px] hover:shadow-2xl hover:scale-105 transition duration-200">
            <img src={meal.strMealThumb} width={"200px"} className="rounded-lg mt-2 hover:scale-105 hover:rotate-3 transition duration-150"alt="" />
            <h3>{meal.strMeal}</h3>
                <Link to={`/detail/${meal.idMeal}`} className="absolute bottom-5">
                  <button className="text-white bg-blue-500 px-10 py-2 rounded-xl hover:bg-blue-700 transition duration-100">
                    <IoEyeSharp className="text-xl"/>
                  </button>
                </Link>        
        </div>

    </Link>
  )
}

export default Card