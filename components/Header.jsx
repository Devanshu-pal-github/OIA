'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import OIALogo from '../assets/oialogo.jpg';
import MedicapsLogo from '../assets/medicapslogo.jpg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
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
                src={MedicapsLogo} 
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
          <Link
            href="/"
            className={`relative px-2 py-1 text-gray-800 transition-all duration-200
              hover:text-primary
              ${pathname === '/' ? 'text-primary font-semibold' : ''}
            `}
          >
            Home
            {pathname === '/' && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
            )}
          </Link>
          <Link
            href="/collaborations"
            className={`relative px-2 py-1 text-gray-800 transition-all duration-200
              hover:text-primary
              ${pathname === '/collaborations' ? 'text-primary font-semibold' : ''}
            `}
          >
            Collaborations
            {pathname === '/collaborations' && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
            )}
          </Link>
          <Link
            href="/student-exchange"
            className={`relative px-2 py-1 text-gray-800 transition-all duration-200
              hover:text-primary
              ${pathname === '/student-exchange' ? 'text-primary font-semibold' : ''}
            `}
          >
            Student Exchange
            {pathname === '/student-exchange' && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
            )}
          </Link>
          <Link
            href="/dual-degrees"
            className={`relative px-2 py-1 text-gray-800 transition-all duration-200
              hover:text-primary
              ${pathname === '/dual-degrees' ? 'text-primary font-semibold' : ''}
            `}
          >
            Dual Degrees
            {pathname === '/dual-degrees' && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
            )}
          </Link>
          <Link
            href="/faculty-exchange"
            className={`relative px-2 py-1 text-gray-800 transition-all duration-200
              hover:text-primary
              ${pathname === '/faculty-exchange' ? 'text-primary font-semibold' : ''}
            `}
          >
            Faculty Exchange
            {pathname === '/faculty-exchange' && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
            )}
          </Link>
          <Link
            href="/contact"
            className={`relative px-2 py-1 text-gray-800 transition-all duration-200
              hover:text-primary
              ${pathname === '/contact' ? 'text-primary font-semibold' : ''}
            `}
          >
            Contact
            {pathname === '/contact' && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
            )}
          </Link>
        </nav>

        {/* OIA Logo */}
        <div className="hidden md:block">
          <Image 
            src={OIALogo} 
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
            {[
              { href: '/', label: 'Home' },
              { href: '/collaborations', label: 'Collaborations' },
              { href: '/student-exchange', label: 'Student Exchange' },
              { href: '/dual-degrees', label: 'Dual Degrees' },
              { href: '/faculty-exchange', label: 'Faculty Exchange' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-2 py-2 text-gray-800 transition-all duration-200 rounded hover:bg-primary/10 hover:text-primary ${pathname === href ? 'text-primary font-semibold bg-primary/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
                {pathname === href && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 