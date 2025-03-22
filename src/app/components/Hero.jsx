'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pb-24 pt-32 md:pb-32 md:pt-40'>
      {/* Decorative elements */}
      <div className='absolute right-10 top-40 z-0 h-20 w-20 rounded-full bg-blue-100 opacity-50 lg:block'></div>
      <div className='absolute bottom-20 left-10 z-0 h-32 w-32 rounded-full bg-blue-50 opacity-70 lg:block'></div>

      <div className='container relative z-10 mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <motion.div
            className='mb-10 md:mb-0 md:w-1/2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'>
              Hi, I'm <span className='text-blue-600'>Cameron Rice</span>
            </h1>
            <p className='mb-8 max-w-lg text-xl text-gray-600'>
              Web Developer specializing in creating responsive, user-friendly
              applications with modern technologies.
            </p>
            <div className='relative z-20 flex flex-wrap gap-4'>
              <Link
                href='/projects'
                className='inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700'
              >
                View My Work
                <svg
                  className='ml-2 h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </Link>
              <Link
                href='/resume'
                className='inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400'
              >
                Resume
                <svg
                  className='ml-2 h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className='md:w-2/5'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-xl md:h-80 md:w-80'>
              {/* Placeholder for profile image */}
              <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
                <svg
                  className='h-32 w-32'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>

              {/* Uncomment and add your image when ready */}
              {/* 
              <Image 
                src="/your-profile-image.jpg" 
                alt="Cameron Rice" 
                fill
                className="object-cover"
                priority
                unoptimized
              /> 
              */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
