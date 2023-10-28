import "./index.css"
import { Routes, Route } from "react-router-dom";
import Meals from "./Meals"
import Detail from "./Detail"
import {IoRestaurant} from "react-icons/io5"

const App = () => {
  return (
    <div className="container mx-auto">
      <IoRestaurant/>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>

    </div>
  )
}

export default App;