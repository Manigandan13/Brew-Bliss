import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['home', 'about', 'menu', 'testimonials', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-white' : 'text-[#1E3932]'
          }`}
        >
          Brew Bliss
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-70}
              className={`cursor-pointer capitalize font-medium transition duration-300 ${
                scrolled ? 'text-white hover:text-yellow-300' : 'text-[#1E3932] hover:text-[#00D66D]'
              }`}
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#1E3932]'}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden ${scrolled ? 'bg-[#40966c] text-white' : 'bg-white text-[#1E3932]'}`}>
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              offset={-70}
              className={`block px-6 py-3 border-b ${
                scrolled
                  ? 'border-white/10 hover:text-yellow-300'
                  : 'border-gray-200 hover:text-[#40966c]'
              } transition capitalize`}
              onClick={() => setIsOpen(false)}
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
