import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import zeinalogo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-[#faf5ee]/95 backdrop-blur-md shadow-lg fixed h-25 top-0 w-full z-50 border-b border-gray-200/20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-24 lg:h-28">

            {/* Left Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              <Link
                to="/"
                className={`text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:text-[#8B9A6B] relative group ${location.pathname === "/" ? "text-[#8B9A6B]" : "text-gray-700"
                  }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#8B9A6B] transition-all duration-300 ${location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
              <Link
                to="/about-us"
                className={`text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:text-[#8B9A6B] relative group ${location.pathname === "/about-us" ? "text-[#8B9A6B]" : "text-gray-700"
                  }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#8B9A6B] transition-all duration-300 ${location.pathname === "/about-us" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
              <Link
                to="/services"
                className={`text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:text-[#8B9A6B] relative group ${location.pathname === "/services" ? "text-[#8B9A6B]" : "text-gray-700"
                  }`}
              >
                Services
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#8B9A6B] transition-all duration-300 ${location.pathname === "/services" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
              <Link
                to="/insights"
                className={`text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:text-[#8B9A6B] relative group ${location.pathname === "/insights" ? "text-[#8B9A6B]" : "text-gray-700"
                  }`}
              >
                Insights
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#8B9A6B] transition-all duration-300 ${location.pathname === "/insights" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>

            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center flex-1 lg:flex-2">
              <Link to="/" className="group">
                <img
                  src={zeinalogo}
                  alt="Zeina Laham Psychology"
                  className="w-full max-w-[1000px] h-[1000px] object-contain transition-transform duration-300"
                />

              </Link>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <Link
                to="/book-session"
                className="bg-[#8B9A6B] hover:bg-[#7A8A5A] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg animate-bounce"
              >
                Book a Session
              </Link>
            </div>


            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                    }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-gray-600 top-3 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-100 lg:hidden`}>

        {/* Mobile Menu Header */}
        <div className="flex items-center justify-end p-4 border-b border-gray-100">

          <button
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-6">
          <nav className="space-y-6">
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About" },

              { path: "/services", label: "Services" },
              { path: "/insights", label: "Insights" },
              { path: "/book-session", label: "Book a Session", isButton: true }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-base font-semibold tracking-wide transition-all duration-300 ${item.isButton
                  ? "bg-[#8B9A6B] hover:bg-[#7A8A5A] text-white px-6 py-3 rounded-xl text-center"
                  : location.pathname === item.path
                    ? "text-[#8B9A6B] pl-4 border-l-2 border-[#8B9A6B]"
                    : "text-gray-700 hover:text-[#8B9A6B] hover:pl-2"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Additional Mobile Menu Info */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              Professional Psychology Services
              <br />
              <span className="text-[#8B9A6B] font-medium">Zeina Laham</span>
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-24 lg:h-28"></div>
    </>
  );
}

export default Navbar;