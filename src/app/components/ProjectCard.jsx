'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  link,
  github
}) {
  return (
    <div className='group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:shadow-sm'>
      {/* Image container */}
      <div className='relative h-48 w-full overflow-hidden bg-zinc-100 border-b border-zinc-100'>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-[1.02]'
            unoptimized
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center text-zinc-400'>
            <svg className='h-12 w-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col p-5'>
        <h3 className='text-lg font-bold text-zinc-950 tracking-tight'>
          {title}
        </h3>
        <p className='mt-2 flex-1 text-sm text-zinc-600 line-clamp-3 leading-relaxed'>
          {description}
        </p>

        {/* Tech tags */}
        <div className='mt-4 flex flex-wrap gap-1.5'>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className='rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className='mt-5 flex items-center gap-2 border-t border-zinc-100 pt-4'>
          {link && (
            <Link
              href={link}
              className='inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800'
            >
              View Case Study
              <svg className='h-3.5 w-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </Link>
          )}

          {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-zinc-300'
            >
              <svg className='h-3.5 w-3.5 text-zinc-500' fill='currentColor' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
