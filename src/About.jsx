import Loading from "./Loader/Loading";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);    
  }, 500);

  return (
    <>
      {isLoading ? <Loading/> : (
        <div className='my-7 mx-5 py-3 mb-24 flex flex-col gap-2 items-center justify-center bg-slate-50 rounded-xl shadow-xl'>
          <h1 className="font-bold text-lg tracking-widest text-gray-500 py-5 text-center">THANK YOU FOR YOUR ATTENTION</h1>
          <Link to={-1}>
            <button className="bg-pink-500 text-white mx-5 px-12 py-1 my-5 rounded-xl hover:bg-pink-700 transition duration-100">
              <div className="flex items-center gap-1 justify-center">
                <IoIosArrowBack/>
                <p>Back</p>
              </div>
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default About