'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Lavender() {
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
          Lavender
        </h1>
        <p className='mt-3 text-lg text-zinc-600 leading-relaxed'>
          A responsive web application engineered to support individuals suffering from Shift Work Sleep Disorder through automated sleep scheduling and cognitive behavioural strategies.
        </p>

        {/* Featured Image */}
        <div className='mt-8 mb-12 flex h-80 sm:h-96 w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-4'>
          <Image
            className='h-full w-auto max-w-full rounded-lg object-contain shadow-xs'
            src='/lavender.png'
            width={600}
            height={400}
            alt='Lavender Application Preview'
          />
        </div>

        {/* Details Grid */}
        <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4 text-zinc-700 leading-relaxed'>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2'>
              About this Project
            </h2>
            <p>
              Lavender served as my Senior Capstone project at <strong>Oregon State University</strong>. I acted as Project Manager leading a team of five developers, establishing project milestones, managing sprints, and overseeing architectural decisions.
            </p>
            <p>
              The application enables shift workers to input non-traditional work schedules and receive personalized recommendations to optimize circadian rhythms. In developing the algorithmic recommendations, our team partnered closely with a sleep psychology specialist to validate that schedule generation aligned with clinical methodologies.
            </p>
            <p>
              On the technical side, the application integrates Google Firebase Authentication, Cloud Firestore for persistent schedule storage, and Cloud Functions for backend automation, paired with a fast React and Vite frontend.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mb-4'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {['React.js', 'Google Firebase', 'Cloud Functions', 'Firestore', 'Vite', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className='rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='mt-8 pt-6 border-t border-zinc-200'>
              <span className='block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2'>
                Project Role
              </span>
              <p className='text-sm text-zinc-800 font-medium'>
                Project Manager & Full-Stack Developer
              </p>
              <p className='text-xs text-zinc-500 mt-0.5'>
                Oregon State University Capstone
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className='pt-6 border-t border-zinc-200'>
          <a
            href='https://lavender-sleep.web.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800'
          >
            Launch Live Application
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
