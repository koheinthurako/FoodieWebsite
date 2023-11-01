import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {BsYoutube} from "react-icons/bs"
import Loading from './Loader/Loading';

// ဒီ process သည် Card UI မှတစ်ဆင့် Detail သို့ data တွေ အသွားအပြန်လုပ်သည့်အတွက် သေချာကြည့်ပါ
const Detail = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getSingleMeal = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals[0]);
    setMeal(data?.meals[0]);
    setIsLoading(false);
  }

  
  useEffect(() => {
    getSingleMeal();
  }, [])

  return (
    <>
      {isLoading ? <Loading/> : (
        <div className='mt-7 mb-24 flex gap-12 justify-center'>
          <img src={meal.strMealThumb} alt="" width={"430px"} className='rounded-xl shadow-xl' />
          <div className="">
            <div className="my-5">
              <h1 className='font-bold text-2xl mb-3'>{meal.strMeal}</h1>
              <div className='bg-pink-500 text-white w-20 text-sm rounded-xl text-center'>{meal.strCategory}</div>
            </div>
            <div className='mb-5'>
              <h2 className='text-xl font-semibold mb-2 underline'>Instruction</h2>
              <p className=''>{meal.strInstructions}</p>
            </div>
            <div className="flex gap-2 items-center">
              <a href={meal.strYoutube} target='__blank'><BsYoutube className='text-red-600 text-3xl cursor-pointer'/></a>
              <p className='text-slate-500'>Watch on YouTube</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail;