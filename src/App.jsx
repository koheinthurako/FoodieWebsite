import "./index.css"
import { Routes, Route } from "react-router-dom";
import Meals from "./Meals"
import Detail from "./Detail"
import {IoRestaurant} from "react-icons/io5"

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-3 my-8">
        <IoRestaurant className="text-2xl text-pink-500"/>
        <p className="text-xl font-semibold text-pink-500">Foodie</p>
      </div>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>

    </div>
  )
}

export default App;