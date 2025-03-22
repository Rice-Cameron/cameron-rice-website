'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Lavender() {
  return (
    <div className='container mx-auto px-4 py-20 md:px-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='mb-6 text-4xl font-bold text-gray-900'>Lavender</h1>
        <p className='mb-8 text-lg text-gray-600'>
          A responsive web application with modern UI/UX design principles.
          Built using React.js and Google Firebase, aimed to help the lives of
          those who suffer from Shift Work Sleep Disorder.
        </p>

        <div className='mb-12 flex h-96 w-full items-center justify-center rounded-lg bg-gray-200 text-gray-400'>
          <Image
            className='h-96 w-full rounded-lg object-contain'
            src='/lavender.png'
            alt='Lavender'
          />
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
              <li>React</li>
              <li>Node.js</li>
              <li>Vite</li>
              <li>Google Firebase</li>
            </ul>
          </div>
        </div>

        <div className='mb-10'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>Features</h2>
          <ul className='list-disc space-y-2 pl-5 text-gray-600'>
            <li>Responsive design that works on all devices</li>
            <li>User authentication and authorization</li>
            <li>Interactive data visualization</li>
            <li>Google Firebase SDK integration</li>
          </ul>
        </div>

        <div className='flex flex-wrap gap-4'>
          <Link
            href='https://lavender-sleep.web.app/'
            target='_blank'
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
        </div>
      </motion.div>
    </div>
  );
}
