import "./index.css"
import { Routes, Route } from "react-router-dom";
import Meals from "./Meals"
import Detail from "./Detail"
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;