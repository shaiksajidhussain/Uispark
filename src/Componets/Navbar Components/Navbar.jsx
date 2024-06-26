import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const leaveDropdown = () => {
        setIsDropdownVisible(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <img
                        className='logo cursor-pointer'
                        src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png"
                        alt="Logo"
                    />
                    <h1
                        className="elements text-white text-xl ml-5 mt-2 dropdown-toggle cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        Elements
                    </h1>
                </div>
            </div>

            <div
                className={`dropdowns cursor-pointer flex ${isDropdownVisible ? 'show' : ''}`}
                onMouseLeave={leaveDropdown}
            >
                <div className="firstdropdown ml-16">
                    <ul className="dropdown">
                        <li className='text-lg'>All</li>
                        <li className='text-lg'>Buttons</li>
                        <li className='text-lg'>Check Boxes</li>
                        <li className='text-lg'>Switches</li>
                        <li className='text-lg'>Cards</li>
                        <li className='text-lg'>Forms</li>
                    </ul>
                </div>
                <div className="thirddropdown ml-16">
                    <ul className="dropdown">
                        <li className='text-lg'>Loaders</li>
                        <li className='text-lg'>Dropdowns</li>
                        <li className='text-lg'>Carousel</li>
                        <li className='text-lg'>Modal</li>
                        <li className='text-lg'>Sidebar</li>
                        <li className='text-lg'>Tooltip</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
