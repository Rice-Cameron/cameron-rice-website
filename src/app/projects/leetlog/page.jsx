'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function LeetLog() {
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
          LeetLog
        </h1>
        <p className='mt-3 text-lg text-zinc-600 leading-relaxed'>
          A modern full-stack web application designed for tracking, analyzing, and organizing algorithmic solutions, time/space complexity notes, and interview prep metrics.
        </p>

        <div className='mt-8 mb-12 flex h-80 sm:h-96 w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-4'>
          <Image
            className='h-full w-auto max-w-full rounded-lg object-contain shadow-xs'
            src='/leetlog.png'
            width={700}
            height={400}
            alt='LeetLog screenshot'
          />
        </div>

        <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4 text-zinc-700 leading-relaxed'>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2'>
              About this Project
            </h2>
            <p>
              LeetLog was built to solve the fragmentation of tracking competitive programming progress across spreadsheets and plain text files. Built with Next.js and TypeScript, it provides an intuitive interface for capturing solution nuances, architectural patterns, and recurrence relations.
            </p>
            <p>
              The platform incorporates a structured schema powered by Prisma ORM and serverless PostgreSQL on Neon. Users can categorize problems by algorithmic technique (e.g., Two Pointers, Dynamic Programming, Topological Sort) and document time and space complexity evaluations.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mb-4'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL (Neon)', 'Server Actions'].map((tech) => (
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

        <div className='mb-10 rounded-xl border border-zinc-200 bg-zinc-50/70 p-6'>
          <h3 className='text-sm font-bold uppercase tracking-wider text-zinc-700 mb-3'>
            Key Engineering Highlights
          </h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600'>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Complexity & space analysis documentation
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Relational PostgreSQL indexing with Prisma
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Algorithmic taxonomy and pattern tagging
            </li>
            <li className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-400' />
              Responsive UI with clean typography
            </li>
          </ul>
        </div>

        <div className='flex flex-wrap gap-3 pt-6 border-t border-zinc-200'>
          <a
            href='https://leetlog-livid.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800'
          >
            Launch Live App
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
            </svg>
          </a>
          <a
            href='https://github.com/Rice-Cameron/LeetLog'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 hover:border-zinc-400'
          >
            View GitHub Source
          </a>
        </div>
      </motion.div>
    </div>
  );
}
