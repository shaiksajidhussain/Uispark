// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("Clicked");
  };

  const isActive = (path) => {
    return location.search.includes(`category=${path}`);
  };

  return (
    <div className="flex">
      <button className="md:hidden p-4" onClick={toggleSidebar}>
        <FaBars className="text-white " />
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block bg-[#171717] text-white w-64 h-screen p-4`}>
        <div className="flex flex-col space-y-2  overflow-y-auto">
          <Link to="/main?category=All" className={`py-2 px-4 hover:bg-gray-700 rounded text-white no-underline ${isActive('All') ? 'bg-[#9DFF1E]' : ''}`}>All</Link>
          <Link to="/main?category=Buttons" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Buttons') ? 'bg-[#9DFF1E]' : ''}`}>Buttons</Link>
          <Link to="/main?category=Checkboxes" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Checkboxes') ? 'bg-[#9DFF1E]' : ''}`}>Checkboxes</Link>
          <Link to="/main?category=Switches" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Toggle switches') ? 'bg-[#9DFF1E]' : ''}`}>Toggle switches</Link>
          <Link to="/main?category=Cards" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Cards') ? 'bg-[#9DFF1E]' : ''}`}>Cards</Link>
          <Link to="/main?category=Loaders" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Loaders') ? 'bg-[#9DFF1E]' : ''}`}>Loaders</Link>
          <Link to="/main?category=Inputs" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Inputs') ? 'bg-[#9DFF1E]' : ''}`}>Inputs</Link>
          <Link to="/main?category=Radio buttons" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Radio buttons') ? 'bg-[#9DFF1E]' : ''}`}>Radio buttons</Link>
          <Link to="/main?category=Forms" className={`py-2 px-4 hover:bg-gray-700 rounded text-white text-lg no-underline ${isActive('Forms') ? 'bg-[#9DFF1E]' : ''}`}>Forms</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;