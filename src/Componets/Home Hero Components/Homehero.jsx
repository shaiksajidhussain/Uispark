import React, { useEffect, useState } from 'react';
import './Homehero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homehero = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowText(true);
        }, 1000); // delay before starting the typewriter effect
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
        });
    }, []);

    return (
        <div className="video-container" data-aos="flip-right">
            <video autoPlay muted loop id="bg-video">
                <source src="https://res.cloudinary.com/defsu5bfc/video/upload/v1717327467/Blue_Animated_Earth_Day_Video_gpw8jw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-overlay">
                <h1>Open-Source UI elements for any project</h1>
                {showText && (
                    <p className="typewriter-text text-[7px] md:text-base">
                        Create, share, and use <span className="inline-flex items-baseline gap-1 italic text-fuchsia-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-5 w-5 translate-y-1">
                            <path d="M9.2467 3C9.65074 6.17905 12.5275 9.00324 15.6934 9.5C12.5275 9.99676 9.65074 12.8209 9.24669 16C8.84265 12.8209 6.16589 9.99676 3 9.5C6.16589 9.00324 8.84265 6.19877 9.2467 3.01971M17.3 20L17.2329 19.5924C17.0448 18.4504 16.1496 17.5552 15.0076 17.3671L14.6 17.3L15.0076 17.2329C16.1496 17.0448 17.0448 16.1496 17.2329 15.0076L17.3 14.6L17.3671 15.0076C17.5552 16.1496 18.4504 17.0448 19.5924 17.2329L20 17.3L19.5924 17.3671C18.4504 17.5552 17.5552 18.4504 17.3671 19.5924L17.3 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                        </svg>beautiful</span> custom elements made with CSS or Tailwind.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Homehero;
