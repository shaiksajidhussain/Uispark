import React, { useEffect } from 'react'
import "./Afterhero.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Afterhero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
        });
    }, []);

    const glowStyle = {
        textShadow: `
          0 0 8px rgba(51, 153, 255, 10),
          0 0 16px rgba(51, 153, 255, 1),
          0 0 24px rgba(51, 153, 255, 1),
          0 0 32px rgba(51, 153, 255, 1)
        `,
        
      };
    return (
        <>

            <section className="bg-[#121920] text-white p-10 xl:mx-28 xl:w-auto" data-aos="zoom-in-up">
                <h2 className="text-[#3399FF] text-sm font-semibold " style={{ fontFamily: 'sans-serif' }}>Why build with <span className='text-[#9DFF1E]'>UIspark?</span> </h2>
                <h1 className="text-3xl font-bold text-white my-4 " style={{ fontFamily: 'sans-serif' }}>A <span className='text-[#3399FF]' > delightful experience</span> <br /> for you and your users</h1>
                <div className='flex justify-center' >

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg jelly-hover">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-[#3399FF] text-2xl cursor-pointer transition-transform transform hover:scale-125 duration-300" style={glowStyle}>💧</span>
                            </div>
                            <h3 className="text-base font-semibold mb-2">Timeless aesthetics</h3>
                            <p className='text-base font-light'>Build beautiful UIs with ease. Start with Google's Material Design, or create your own sophisticated theme.</p>
                        </div>
                        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg jelly-hover">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-[#3399FF] text-2xl cursor-pointer transition-transform transform hover:scale-125 duration-300 " style={glowStyle}>🛠️</span>
                            </div>
                            <h3 className="text-base font-semibold mb-2">Intuitive customization</h3>
                            <p className='text-base font-light'>Our components are as flexible as they are powerful. You always have full control over how they look and behave.</p>
                        </div>

                        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg jelly-hover">
                            <div className="flex items-center justify-center mb-4">
                                <span className="text-[#3399FF] text-2xl cursor-pointer transition-transform transform hover:scale-125 duration-300 " style={glowStyle}>♿</span>
                            </div>
                            <h3 className="text-base font-semibold mb-2">Dedicated to accessibility</h3>
                            <p className='text-base font-light'>We believe in building for everyone. That's why accessibility is one of our highest priorities with every new feature we ship.</p>
                        </div>
                        
                          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg jelly-hover">
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-blue-400 text-2xl cursor-pointer transition-transform transform hover:scale-125 duration-300" style={glowStyle}>📄</span>
                    </div>
                    <h3 className="text-base font-semibold mb-2">Unrivaled documentation</h3>
                    <p className='text-base font-light'>The answer to your problem can be found in our documentation. How can we be so sure? Because our docs boast over 2,000 contributors.</p>
                </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Afterhero