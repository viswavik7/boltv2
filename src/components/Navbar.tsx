import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">HW</span>
            </div>
            <span className="font-bold text-xl text-gray-900">HealthWorks</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-violet-600' : 'text-gray-700'
              } hover:text-violet-600 transition-colors duration-200 font-medium`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${
                isActive('/products') ? 'text-violet-600' : 'text-gray-700'
              } hover:text-violet-600 transition-colors duration-200 font-medium`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-violet-600' : 'text-gray-700'
              } hover:text-violet-600 transition-colors duration-200 font-medium`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-violet-600' : 'text-gray-700'
              } hover:text-violet-600 transition-colors duration-200 font-medium`}
            >
              Contact
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-violet-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-violet-600 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-violet-600 bg-violet-50' : 'text-gray-700'
                } block px-3 py-2 rounded-md hover:text-violet-600 hover:bg-violet-50 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`${
                  isActive('/products') ? 'text-violet-600 bg-violet-50' : 'text-gray-700'
                } block px-3 py-2 rounded-md hover:text-violet-600 hover:bg-violet-50 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about') ? 'text-violet-600 bg-violet-50' : 'text-gray-700'
                } block px-3 py-2 rounded-md hover:text-violet-600 hover:bg-violet-50 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`${
                  isActive('/contact') ? 'text-violet-600 bg-violet-50' : 'text-gray-700'
                } block px-3 py-2 rounded-md hover:text-violet-600 hover:bg-violet-50 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;