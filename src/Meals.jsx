import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loader/Loading";

const Meals = () => {

  const [meals, setMeals] = useState([]);

  // Meals တွေကို rendering မလုပ်ခင် loading အရင်လုပ်ခြင်း
  const [isLoading, setIsLoading] = useState(true);

  // axios ကိုသုံးပြီး api fetch လုပ်တယ် အပေါ်မှာ state တစ်ခုကြေညာပြီး အောက်က fetch လို့ရလာတဲ့ data တွေကို setMeals နဲ့ meals ထဲကိုထည့်ပြီး
  // getMeals() fun ကိုခေါ်လိုက်တဲ့အခါအလုပ်လုပ်သွားပြီး နောက်ဆုံး conditional map နဲ့ loop ပတ်ပြီး rendering လုပ်သွားတယ်
  const getMeals = async () => {
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    setMeals(data.meals);
    setIsLoading(false);
    // console.log(data.meals);
  }

  useEffect(() => {
    getMeals();
  }, [])

  return (
    <>
      {/* condition နဲ့ loading ရှိ/မရှိ အရင်စစ်တယ် */}
      {isLoading ? <Loading/> : (
        <div className="flex flex-wrap gap-5 justify-center mb-16">
          {meals?.map(meal => (
            <Card key={(meal.idMeal)} meal={meal}/>
          ))}
        </div>
      )}
    </>
  )
}

export default Meals;