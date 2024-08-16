import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Portfolio</div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`hidden md:flex space-x-6`}>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Connect Button */}
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href="#contact">Connect Me</a>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-gray-800'>
          <div className='space-y-4 p-4 text-center'>
            <a href="#home" className='block hover:text-gray-400'>Home</a>
            <a href="#about" className='block hover:text-gray-400'>About Me</a>
            <a href="#service" className='block hover:text-gray-400'>Services</a>
            <a href="#project" className='block hover:text-gray-400'>Projects</a>
            <a href="#contact" className='block hover:text-gray-400'>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
