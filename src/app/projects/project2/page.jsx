'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Project2() {
  return (
    <div className='container mx-auto px-4 py-20 md:px-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='mb-6 text-4xl font-bold text-gray-900'>Project 2</h1>
        <p className='mb-8 text-lg text-gray-600'>
          A mobile-first e-commerce platform that provides seamless shopping
          experiences. Implements secure payment processing and user
          authentication.
        </p>

        <div className='mb-12 flex h-96 w-full items-center justify-center rounded-lg bg-gray-200 text-gray-400'>
          <svg
            className='h-24 w-24'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
              clipRule='evenodd'
            />
          </svg>
        </div>

        <div className='mb-10 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              About this project
            </h2>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              Technologies Used
            </h2>
            <ul className='list-disc space-y-1 pl-5 text-gray-600'>
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>Stripe</li>
              <li>Vercel</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>

        <div className='mb-10'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>Features</h2>
          <ul className='list-disc space-y-2 pl-5 text-gray-600'>
            <li>Mobile-first responsive design</li>
            <li>Secure payment processing with Stripe</li>
            <li>User account management</li>
            <li>Product search and filtering</li>
            <li>Order tracking and history</li>
          </ul>
        </div>

        <div className='flex flex-wrap gap-4'>
          <Link
            href='#'
            className='inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700'
          >
            View Live Demo
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
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </Link>
          <Link
            href='#'
            className='inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400'
          >
            View Code
            <svg
              className='ml-2 h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
