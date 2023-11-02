import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {BsYoutube} from "react-icons/bs"
import Loading from './Loader/Loading';

// ဒီ process သည် Card UI မှတစ်ဆင့် Detail သို့ data တွေ အသွားအပြန်လုပ်သည့်အတွက် သေချာကြည့်ပါ
const Detail = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getSingleMeal = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    setMeal(data?.meals[0]);
    setIsLoading(false);
  }

  
  useEffect(() => {
    getSingleMeal();
  }, [])

  return (
    <>
      {isLoading ? <Loading/> : (
        <div className='my-7 mx-5 py-3 mb-24 flex flex-wrap gap-9 items-center justify-center bg-slate-50 rounded-xl shadow-xl'>
          <img src={meal.strMealThumb} alt="" className='w-96 h-max rounded-xl shadow-xl' />
          <div className="px-12 w-[700px]">
            <div className="my-5">
              <h1 className='font-bold text-2xl mb-3'>{meal.strMeal}</h1>
              <div className='bg-pink-500 text-white w-20 text-sm rounded-xl text-center'>{meal.strCategory}</div>
            </div>
            <div className='mb-5'>
              <h2 className='text-xl font-semibold mb-2 underline'>Instruction</h2>
              <p>{meal.strInstructions}</p>
            </div>
            <div className="flex flex-wrap gap-12 mb-5">
              <div className='flex gap-3 items-center'>
                <a href={meal.strYoutube} target='__blank'><BsYoutube className='text-red-600 text-3xl cursor-pointer'/></a>
                <a href={meal.strYoutube} target='__blank' className='text-slate-500 cursor-pointer'>Watch on YouTube</a>
              </div>
              <Link to={'/'}>
                <button className='bg-pink-500 text-white px-12 py-1 rounded-xl hover:bg-pink-700 transition duration-150'>Home</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail;