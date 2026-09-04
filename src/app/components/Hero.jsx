'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='relative border-b border-zinc-200/80 bg-white py-16 md:py-24 overflow-hidden'>
      {/* Subtle architectural background grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]' />

      <div className='container relative mx-auto px-4 md:px-6 max-w-6xl'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-12'>
          {/* Left Text Column */}
          <div className='lg:col-span-7'>
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]'
            >
              Building robust Windows desktop applications & modern full-stack systems.
            </motion.h1>

            {/* Bio text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className='mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl'
            >
              Hi, I’m Cameron Rice. I'm a Computer Science graduate from Oregon State University (3.90 GPA) working full-time developing and maintaining production Windows client/server applications in .NET and MySQL, alongside building clean, performant web applications.
            </motion.p>

            {/* Credential Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='mt-6 flex flex-wrap gap-2 text-xs font-medium text-zinc-600'
            >
              <span className='rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-800 border border-zinc-200/60'>
                C# / .NET Desktop
              </span>
              <span className='rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-800 border border-zinc-200/60'>
                MySQL Client/Server
              </span>
              <span className='rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-800 border border-zinc-200/60'>
                React / Next.js
              </span>
              <span className='rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-800 border border-zinc-200/60'>
                Oregon State CS '25 (3.90 GPA)
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className='mt-8 flex flex-wrap items-center gap-3.5'
            >
              <Link
                href='/projects'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 focus:outline-none'
              >
                View Projects
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </Link>

              <Link
                href='/resume'
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-2xs transition-all hover:bg-zinc-50 hover:border-zinc-400 focus:outline-none'
              >
                View Resume
              </Link>

              <div className='flex items-center gap-2 pl-2'>
                <a
                  href='https://github.com/Rice-Cameron'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-lg border border-zinc-200 p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900'
                  aria-label='GitHub'
                >
                  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/in/rice-cameron/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-lg border border-zinc-200 p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900'
                  aria-label='LinkedIn'
                >
                  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Portrait Column */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end'>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className='relative'
            >
              {/* Clean architectural border frame */}
              <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl p-2 bg-gradient-to-b from-zinc-200 to-zinc-100 shadow-md'>
                <div className='relative w-full h-full rounded-xl overflow-hidden bg-zinc-100'>
                  <Image
                    src='/headshotpfp.jpeg'
                    alt='Cameron Rice'
                    fill
                    className='object-cover'
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
