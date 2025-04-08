import React from 'react'
import Navbar from './Navbar'
import Cars from './Cars'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <section
  className="relative h-screen flex items-center justify-center bg-cover bg-center text-white bg-blue-400"
  
>



  
  <div className="bg-blue-400"></div>

  <div className="relative text-center max-w-3xl mx-auto p-6">
    
    <p className="text-lg uppercase tracking-widest mb-2 animate-pulse">Golf GTI • Passat • Tiguan • Arteon • Touareg</p>

    <h1 className="text-8xl font-extrabold uppercase drop-shadow-md animate-fadeIn">
      Drive the Future <br /> with <span className="text-blue-800">Volkswagen</span>
    </h1>

    <p className="text-3xl mt-4 max-w-xl mx-auto text-gray-300">
      Experience cutting-edge innovation, performance, and luxury in every ride.
    </p>

    <a href="#cars">
    <button className="mt-6 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
      Explore Our Cars
    </button></a>
    
  </div>
</section>

  
          <Cars/>

    </div>
  )
}

export default Home
