'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Planets() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container mx-auto px-4 py-16 md:px-6 max-w-4xl'>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href='/projects'
          className='inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-6'
        >
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          Back to Projects
        </Link>

        <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950'>
          Kotlin Planet App
        </h1>
        <p className='mt-3 text-lg text-zinc-600 leading-relaxed'>
          Native Android application built in Kotlin and Android Studio, interfacing with RESTful APIs to visualize planetary astronomical data and orbital characteristics.
        </p>

        <div className='mt-8 mb-12 flex h-80 sm:h-96 w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-4'>
          <Image
            src='/planets2.png'
            alt='Kotlin Planet App'
            width={400}
            height={400}
            className='h-full w-auto max-w-full rounded-lg object-contain shadow-xs'
          />
        </div>

        <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4 text-zinc-700 leading-relaxed'>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2'>
              Mobile Engineering Overview
            </h2>
            <p>
              Built to explore native Android application development patterns using Kotlin. The application makes asynchronous HTTP requests to external astronomical endpoints, parses JSON payloads into strongly typed data models, and presents the results through clean RecyclerView layouts.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mb-4'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {['Kotlin', 'Android Studio', 'XML UI', 'REST API', 'JSON Parsing', 'Android SDK'].map((tech) => (
                <span
                  key={tech}
                  className='rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-3 pt-6 border-t border-zinc-200'>
          <button
            type='button'
            onClick={() => setIsOpen(true)}
            className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800'
          >
            Watch Video Demo
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </button>
          <a
            href='https://github.com/Rice-Cameron/kotlin-planet-app'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 hover:border-zinc-400'
          >
            View GitHub Source
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 backdrop-blur-xs p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='relative w-full max-w-lg rounded-2xl bg-zinc-900 p-4 shadow-2xl border border-zinc-800'>
              <div className='flex items-center justify-between pb-3 mb-2 border-b border-zinc-800 text-zinc-300 text-xs font-medium'>
                <span>Mobile App Demo Preview</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className='rounded-md p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors'
                >
                  <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
              <video
                controls
                autoPlay
                className='h-[70vh] max-h-[550px] w-full rounded-lg object-contain bg-black'
                src='/planets.webm'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
