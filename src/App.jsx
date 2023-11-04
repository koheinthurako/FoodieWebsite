import "./index.css"
import { Routes, Route } from "react-router-dom";
import Meals from "./Meals"
import Detail from "./Detail"
import Navbar from "./Navbar";
import About from "./About";

const App = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;