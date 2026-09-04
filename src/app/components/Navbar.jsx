'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs py-3'
          : 'bg-[#fafafa]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className='container mx-auto px-4 md:px-6 max-w-6xl'>
        <div className='flex items-center justify-between'>
          {/* Logo / Personal brand */}
          <Link
            href='/'
            className='group flex items-center gap-2.5 text-zinc-900 font-semibold tracking-tight transition-colors'
          >
            <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105'>
              CR
            </span>
            <span className='text-base font-semibold text-zinc-900 tracking-tight'>
              Cameron Rice
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden items-center gap-1 md:flex'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-zinc-950 font-semibold bg-zinc-100/90'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className='absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-zinc-900' />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className='inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle Navigation'
          >
            {isMobileMenuOpen ? (
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className='mt-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-150'>
            <div className='flex flex-col space-y-1.5'>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-zinc-100 font-semibold text-zinc-900'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
