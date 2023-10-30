import axios from "axios"
import { useEffect, useState } from "react";

const Meals = () => {

  const [meals, setMeals] = useState([

  ]);

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