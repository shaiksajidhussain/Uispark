import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import elementsData from '../Elements/elements.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from './UIElementsPage';
import './MainLayout.css'; // Import the CSS file

const MainLayout = () => {
  const [elements, setElements] = useState(elementsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLibrary, setFilterLibrary] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 10;
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1500 });
    shuffleElements();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category') || 'All';
    filterElements(category, filterLibrary);
  }, [location.search, filterLibrary, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const shuffleElements = () => {
    const shuffledElements = [...elementsData].sort(() => 0.5 - Math.random());
    setElements(shuffledElements);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterElements = (category, library) => {
    let filteredElements = elementsData;

    if (category !== 'All') {
      filteredElements = filteredElements.filter(element => element.category === category);
    }

    if (library !== 'All') {
      filteredElements = filteredElements.filter(element => element.library === library);
    }

    if (searchQuery) {
      filteredElements = filteredElements.filter(element => 
        element.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setElements(filteredElements);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleFilterClick = (library) => {
    setFilterLibrary(library);
  };

  // Calculate elements for the current page
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = elements.slice(indexOfFirstElement, indexOfLastElement);

  // Pagination controls
  const totalPages = Math.ceil(elements.length / elementsPerPage);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 bg-[#171717] text-white p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-4 md:mb-0 magnify-hover">Browse <span className='text-[#9DFF1E]'>all</span></h1>
            <div className='flex flex-wrap gap-1'>
              <span className="text-sm magnify-hover">Open</span>
              <span className="text-sm magnify-hover">Source</span>
              <span className="text-sm magnify-hover">UI</span>
              <span className="text-sm magnify-hover">Elements</span>
              <span className="text-sm magnify-hover">made</span>
              <span className="text-sm magnify-hover">with</span>
              <span className="text-sm magnify-hover hover:text-[#9DFF1E]">CSS</span>
              <span className="text-sm magnify-hover hover:text-[#9DFF1E]">Tailwind</span>
              <span className="text-sm magnify-hover hover:text-[#9DFF1E]">Bootstrap</span>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search tags, users, posts..."
            className="bg-gray-800 text-white p-2 rounded w-full md:w-1/3"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-wrap space-x-2 mb-4">
          <button 
            className={`hover:bg-gray-800 py-2 px-4 rounded ${filterLibrary === 'All' ? 'bg-[#9DFF1E]' : 'bg-[#202020]'} font-bold`} 
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button 
            className={`hover:bg-gray-800 py-2 px-4 rounded ${filterLibrary === 'Tailwind' ? 'bg-[#9DFF1E]' : 'bg-[#202020]'} font-bold`} 
            onClick={() => handleFilterClick('Tailwind')}
          >
            Tailwind
          </button>
          <button 
            className={`hover:bg-gray-800 py-2 px-4 rounded ${filterLibrary === 'CSS' ? 'bg-[#9DFF1E]' : 'bg-[#202020]'} font-bold`} 
            onClick={() => handleFilterClick('CSS')}
          >
            CSS
          </button>
          <button 
            className={`hover:bg-gray-800 py-2 px-4 rounded ${filterLibrary === 'Bootstrap' ? 'bg-[#9DFF1E]' : 'bg-[#202020]'} font-bold`} 
            onClick={() => handleFilterClick('Bootstrap')}
          >
            Bootstrap
          </button>
          <button
            className="hover:bg-gray-800 py-2 px-4 rounded bg-[#202020] font-bold"
            onClick={shuffleElements}
          >
            Shuffle
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {currentElements.map(element => (
            <div 
              key={element.id} 
              className="bg-[#202020] p-4 rounded shadow-gray-950 hover:shadow-lg "
            >
              <iframe
                height="420"
                className='transform transition-all duration-300 hover:scale-105 hover:shadow-[#9DFF1E]'
                style={{ width: '115%', overflow: 'hidden', borderRadius: '10px' }}
                scrolling="no"
                title={`CodePen Embed ${element.id}`}
                src={`${element.url.replace('/pen/', '/embed/')}`}
                frameBorder="no"
                loading="lazy"
                allowtransparency="true"
                allowFullScreen={true}
              ></iframe>
              {/* <p className="mt-2">{element.name}</p> */}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-[#9DFF1E] text-black py-2 px-4 rounded"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className="bg-[#9DFF1E] text-black py-2 px-4 rounded"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;