'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-3 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center">
              <Image 
                src="/images/medicaps-logo.png" 
                alt="Medicaps University" 
                width={120} 
                height={50} 
                className="h-12 w-auto" 
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-800 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/collaborations" className="text-gray-800 hover:text-primary transition-colors">
            Collaborations
          </Link>
          <Link href="/student-exchange" className="text-gray-800 hover:text-primary transition-colors">
            Student Exchange
          </Link>
          <Link href="/dual-degrees" className="text-gray-800 hover:text-primary transition-colors">
            Dual Degrees
          </Link>
          <Link href="/faculty-exchange" className="text-gray-800 hover:text-primary transition-colors">
            Faculty Exchange
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* OIA Logo */}
        <div className="hidden md:block">
          <Image 
            src="/images/oia-logo.png" 
            alt="OIA Logo" 
            width={60} 
            height={60} 
            className="h-10 w-auto" 
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/collaborations" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collaborations
            </Link>
            <Link 
              href="/student-exchange" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Student Exchange
            </Link>
            <Link 
              href="/dual-degrees" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dual Degrees
            </Link>
            <Link 
              href="/faculty-exchange" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty Exchange
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 