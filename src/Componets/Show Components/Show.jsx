import React from 'react';
import "./Show.css"
const Show = () => {
  // Array of URLs to your CodePens
  const codePenUrls = [
    "https://codepen.io/Sanju-Sazid/pen/yLWJzPj",
    "https://codepen.io/Sanju-Sazid/pen/MWdmjOZ",
    "https://codepen.io/Sanju-Sazid/pen/LYoyRQp",
    "https://codepen.io/Sanju-Sazid/pen/MWdmjxd",
    "https://codepen.io/Sanju-Sazid/pen/eYaWdoq",
    "https://codepen.io/Sanju-Sazid/pen/ZENKpNg",
    

  ];

  return (
    <div className="min-h-screen bg-[#121920] text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white">Beautiful and powerful Elements</h1>
        <p className="text-2xl font-bold text-[#3399FF]">Copy and Use the Elements</p>
      </div>
      <div className="container text-center" >
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {codePenUrls.map((url, index) => (
      <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg overflow-hidden">
        <iframe
          height="400"
          style={{ width: '100%', overflow: 'hidden' }}
          scrolling="no"
          title={`CodePen Embed ${index + 1}`}
          src={`${url.replace('/pen/', '/embed/')}`}
          frameBorder="no"
          loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        ></iframe>
        <div className="mt-4">
          <button
            onClick={() => window.open(url, '_blank')}
            className="bg-red-300 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          >
            Show Code
          </button>
        </div>
      </div>
    ))}
  </div>
  
</div>

    </div>
  );
};

export default Show;
