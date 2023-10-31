import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();
  const getSingleMeal = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals);
  }
  
  useEffect(() => {
    getSingleMeal();
  }, [])

  return (
    <div>Detail - {id}</div>
  )
}

export default Detail;