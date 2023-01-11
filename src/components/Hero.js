import React from 'react'
import { useNavigate } from 'react-router'

const Hero = () => {
  
   const nav= useNavigate()

  return (
<div>
    <div className="hero min-h-700 bg-base-200">
  <div className="hero-content flex-col lg:flex-row lg:px-[100px] px-[40px]   ">
   
    <div className='flex flex-col items-start '>
      <h1 className="text-5xl font-bold  ">LITTLE LEMON</h1>
      <p className='text-2xl font-bold'>KARACHI</p>
      <p className="py-6  text-start">Provident cupiditate  Since your container is flex-direction: column, the cross axis is horizontal, and align-items: stretch is expanding the  voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button onClick={()=>nav("/booking")} className="btn btn-base rounded-full px-6">Book Table</button>
    </div>
    <img src="https://cdn.pixabay.com/photo/2022/05/22/13/21/healthy-7213383_960_720.jpg" className="max-w-sm h-[500px] rounded-lg shadow-2xl" />
  </div>
</div>
    </div>
  )
}

export default Hero