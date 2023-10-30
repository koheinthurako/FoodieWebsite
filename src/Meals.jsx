import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {

  const [meals, setMeals] = useState([  ]);

  // axios ကိုသုံးပြီး api fetch လုပ်တယ် အပေါ်မှာ state တစ်ခုကြေညာပြီး အောက်က fetch လို့ရလာတဲ့ data တွေကို setMeals နဲ့ meals ထဲကိုထည့်ပြီး
  // getMeals() fun ကိုခေါ်လိုက်တဲ့အခါအလုပ်လုပ်သွားပြီး နောက်ဆုံး conditional map နဲ့ loop ပတ်ပြီး rendering လုပ်သွားတယ်
  const getMeals = async () => {
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    setMeals(data.meals);
    console.log(data.meals);
  }

  useEffect(() => {
    getMeals();
  }, [])

  return (
    <div>
      {meals?.map(meal => <h1 key={meal.idMeal}>{meal.strMeal}</h1>)}
    </div>
  )
}

export default Meals;