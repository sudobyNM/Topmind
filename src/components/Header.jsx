import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" shadow-sm">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-6 border-b-2 border-gray-200">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="">
              <div className="w-8 h-8 flex items-center justify-center" style={{background: 'conic-gradient(from 105deg, #f182d4ff 0%, #66c4bdff 60% , #83b1e5ff 80%)', borderRadius: '20%'}}>    
              </div>
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-900">Topmind Care</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row gap-2">
            
            <div className=" flex items-center">
              <a href="#" className="text-purple-800 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Why
              </a>
              <a href="#" className="text-purple-800 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Programs
              </a>
              <a href="#" className="text-purple-800 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#" className="text-purple-800 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                For Parents
              </a>
              <a href="#" className="text-purple-800 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                FAQ
              </a>
            </div>
            <div className="hidden md:flex justify-end items-center">
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Start Free
            </button>
            </div>
          
          </div>

          
          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden w-64 h-full left-50 right-0 z-10 shadow-lg transition-transform transform duration-300 ease-in-out translate-x-0 fixed bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t ">
              <a href="#" className="text-purple-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Why
              </a>
              <a href="#" className="text-purple-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Programs
              </a>
              <a href="#" className="text-purple-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#" className="text-purple-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                For Parents
              </a>
              <a href="#" className="text-purple-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
                FAQ
              </a>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
