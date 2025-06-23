'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({
  title,
  description,
  image = '/project-placeholder.jpg',
  tags = [],
  link,
  github
}) => {
  return (
    <motion.div
      className='overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative h-48 w-full bg-gray-200 sm:h-56'>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover'
            unoptimized
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
            <svg
              className='h-16 w-16'
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
        )}
      </div>

      <div className='flex min-h-[300px] flex-col'>
        <div className='flex-grow p-4 md:p-5'>
          <h3 className='mb-2 text-xl font-bold text-gray-900'>{title}</h3>
          <p className='mb-4 line-clamp-3 text-gray-600'>{description}</p>

          <div className='flex flex-wrap justify-start gap-2'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='rounded-full bg-blue-50 px-2 py-1 text-sm font-medium text-blue-600'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='flex space-x-2 px-4 pb-4 md:space-x-3 md:px-5 md:pb-5'>
          {link && (
            <Link
              href={link}
              className='inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700'
            >
              View Project
              <svg
                className='ml-1 h-4 w-4'
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
          )}

          {github && (
            <Link
              href={github}
              className='inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
              <svg
                className='ml-1 h-4 w-4'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
