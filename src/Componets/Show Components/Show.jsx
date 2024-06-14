import React, { useEffect } from 'react';
import "./Show.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Show = () => {

  useEffect(() => {
    AOS.init({
        duration: 1500, // Animation duration in milliseconds
    });
}, []);
  // Array of URLs to your CodePens
  const codePenUrls = [
    "https://codepen.io/Sanju-Sazid/pen/yLWJzPj",
    "https://codepen.io/Sanju-Sazid/pen/MWdmjOZ",
    "https://codepen.io/Sanju-Sazid/pen/BaemeYp",

    "https://codepen.io/Sanju-Sazid/pen/MWdmjxd",
    "https://codepen.io/Sanju-Sazid/pen/BaeRYWq",
    "https://codepen.io/Sanju-Sazid/pen/PovmQmB",
    "https://codepen.io/Sanju-Sazid/pen/JjqNpJW",
    "https://codepen.io/Sanju-Sazid/pen/jOomZdE",
    "https://codepen.io/Sanju-Sazid/pen/QWRORrO",
    "https://codepen.io/Sanju-Sazid/pen/LYoyRQp",
    "https://codepen.io/Sanju-Sazid/pen/vYwWwVL",
    "https://codepen.io/Sanju-Sazid/pen/zYQPQQQ",

    

  ];

  return (
    <div className="min-h-screen bg-[#121920] text-white p-8" data-aos="zoom-in-up">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white">Beautiful and powerful Elements</h1>
        <p className="text-2xl font-bold text-[#3399FF]">Copy and Use the Elements</p>
      </div>
      <div className="container text-center" >
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
    {codePenUrls.map((url, index) => (
      <div key={index} className="jelly-hover bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg overflow-hidden">
        <iframe
          height="300"
          style={{ width: '100%', overflow: 'hidden',borderRadius:'10px' }}
          scrolling="no"
          title={`CodePen Embed ${index + 1}`}
          src={`${url.replace('/pen/', '/embed/')}`}
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        {/* <div className="mt-4">
          <button
            onClick={() => window.open(url, '_blank')}
            className="bg-red-300 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
            Show Code
          </button>
        </div> */}
      </div>
    ))}
  </div>
  
</div>

    </div>
  );
};

export default Show;
