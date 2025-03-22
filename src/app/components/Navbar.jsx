'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white py-2 shadow-md' : 'bg-transparent py-4'}`}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-xl font-bold text-gray-800'>
            Cameron Rice
          </Link>

          {/* Mobile menu button */}
          <button
            className='focus:outline-none md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className='h-6 w-6 text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden space-x-8 md:flex'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/projects'>Projects</NavLink>
            <NavLink href='/resume'>Resume</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='absolute left-0 right-0 mx-4 mt-4 rounded-lg bg-white p-4 shadow-lg md:hidden'>
            <div className='flex flex-col space-y-4'>
              <MobileNavLink
                href='/'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink
                href='/about'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                href='/projects'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href='/resume'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className='group relative font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900'
    >
      {children}
      <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
    </Link>
  );
};

const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      className='block rounded px-2 py-1 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900'
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
