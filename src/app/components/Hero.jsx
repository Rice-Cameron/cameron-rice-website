'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 pb-28 pt-32 md:pb-36 md:pt-40'>
      {/* =================================
          BACKGROUND DECORATIVE ELEMENTS
          ================================= */}
      {/* Large blue bubble - top right */}
      <div className='absolute -right-4 top-20 z-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl'></div>
      {/* Large indigo bubble - bottom left */}
      <div className='absolute -bottom-10 -left-10 z-0 h-72 w-72 rounded-full bg-indigo-50/60 blur-3xl'></div>
      {/* Medium cyan bubble - bottom right */}
      <div className='absolute bottom-40 right-1/4 z-0 h-40 w-40 rounded-full bg-cyan-50/50 blur-2xl'></div>
      {/* Small blue bubble - mid left */}
      <div className='absolute left-1/3 top-1/4 z-0 h-28 w-28 rounded-full bg-blue-100/30 blur-xl'></div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAgLTZoLTJ2LTRoMnY0eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-[0.03]"></div>

      <div className='container relative z-10 mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          {/* =================================
              LEFT SIDE - TEXT CONTENT AREA
              ================================= */}
          <motion.div
            className='mb-10 md:mb-0 md:w-1/2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* "Web Developer" badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-blue-100'
            >
              Web Developer
            </motion.div>

            {/* Main heading with animated underline */}
            <h1 className='mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl'>
              Hi, I'm{' '}
              <motion.span
                className='relative inline-block text-blue-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Cameron Rice
                {/* Animated underline for name */}
                <motion.span
                  className='absolute -bottom-2 left-0 h-1 w-full rounded-full bg-blue-600/30'
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                ></motion.span>
              </motion.span>
            </h1>

            {/* Subtitle/description paragraph */}
            <motion.p
              className='mb-8 max-w-lg text-xl leading-relaxed text-gray-600'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Web Developer specializing in creating responsive, user-friendly
              applications with modern technologies.
            </motion.p>

            {/* =================================
                CALL-TO-ACTION BUTTONS
                ================================= */}
            <motion.div
              className='relative z-20 flex flex-wrap gap-4'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* "View My Work" button - Primary blue with right arrow */}
              <Link
                href='/projects'
                className='group inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20'
              >
                View My Work
                {/* Right arrow icon */}
                <svg
                  className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1'
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

              {/* "Resume" button - Secondary white with document icon */}
              <Link
                href='/resume'
                className='group inline-flex transform items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md'
              >
                Resume
                {/* Document icon */}
                <svg
                  className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5'
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
            </motion.div>

            {/* =================================
                SOCIAL MEDIA LINKS
                ================================= */}
            <motion.div
              className='mt-10 flex items-center space-x-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {/* GitHub social icon */}
              <a
                href='https://github.com/Rice-Cameron'
                target='_blank'
                className='text-gray-500 transition-colors duration-300 hover:text-blue-600'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              {/* LinkedIn social icon */}
              <a
                href='https://www.linkedin.com/in/cameron-rice-03b257249/'
                target='_blank'
                className='text-gray-500 transition-colors duration-300 hover:text-blue-600'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* =================================
              RIGHT SIDE - PROFILE IMAGE AREA
              ================================= */}
          <motion.div
            className='md:w-2/5'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Profile container with hover effect */}
            <motion.div
              className='relative mx-auto h-64 w-64 md:h-80 md:w-80'
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile background elements */}
              {/* Main circular background with gradient */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-white to-blue-50 shadow-xl'></div>
              {/* Blurred halo/glow effect */}
              <div className='absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-10 blur-md'></div>
              {/* Inner background with blur effect */}
              <div className='absolute inset-2 rounded-full bg-white/90 backdrop-blur-sm'></div>

              {/* Profile image - Using your headshot photo */}
              <div className='absolute inset-0 overflow-hidden rounded-full border-4 border-white shadow-lg'>
                <Image
                  src='/headshotpfp.jpeg'
                  alt='Cameron Rice'
                  fill
                  className='object-cover'
                  priority
                  unoptimized
                />
              </div>

              {/* =================================
                  DECORATIVE SKILL ICONS
                  ================================= */}
              {/* Settings/gear icon - bottom right */}
              <motion.div
                className='absolute -bottom-4 -right-2 h-14 w-14 rounded-full bg-blue-600 p-3 shadow-lg'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <svg
                  className='h-full w-full text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
              </motion.div>

              {/* Design/paint brush icon - top left */}
              <motion.div
                className='absolute -left-4 top-5 h-12 w-12 rounded-full bg-indigo-500 p-3 shadow-lg'
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg
                  className='h-full w-full text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                  ></path>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
