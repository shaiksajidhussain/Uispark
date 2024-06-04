import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Most = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
    });
}, []);

  return (
    <>

<div className="bg-gray-900 text-white min-h-screen flex items-center justify-center" data-aos="zoom-in-up">
      <div className="max-w-6xl mx-auto px-4 lg:flex lg:items-center lg:justify-between ">
        <div className="lg:w-2/2">
          <h1 className="text-5xl font-bold mb-4">
            The most popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500">component library</span> for Web Dev's
          </h1>
          <p className="text-lg mb- w-auto">
            Uispark makes your work simple and easy. so you can make beautiful websites faster than ever.
          </p>
     
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="https://tailwindcomponents.com/svg/website-designer-bro.svg" alt="" />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Most