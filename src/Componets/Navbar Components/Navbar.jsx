import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
                    <Link to="/">

                    <img
                        className='logo cursor-pointer mb-1  '
                        src="https://res.cloudinary.com/dknjrobkx/image/upload/v1767180163/62fcd57c-8f92-447d-ba38-90e6df9c55af.png"
                        alt="Logo"
                    />
                    </Link>
                    <h1
                        className="elements text-white text-lg ml-5 mt-2 dropdown-toggle cursor-pointer bg-[#171717]"
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
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>All</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Buttons</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline'><li className='text-lg'>Check Boxes</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Switches</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Cards</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Forms</li></Link>
    </ul>
</div>
<div className="thirddropdown ml-16">
    <ul className="dropdown">
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Loaders</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Dropdowns</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Carousel</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Modal</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Sidebar</li></Link>
        <Link to="/main" className='text-white hover:text-yellow-500 no-underline' ><li className='text-lg'>Tooltip</li></Link>
    </ul>
</div>
            </div>
        </>
    );
};

export default Navbar;