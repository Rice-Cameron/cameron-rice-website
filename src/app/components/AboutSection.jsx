'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'C/C++', 'SQL', 'Kotlin']
    },
    {
      title: 'Frameworks & Systems',
      skills: ['.NET (Windows Desktop)', 'React', 'Next.js', 'Node.js', 'Laravel', 'FilamentPHP', 'Tailwind CSS']
    },
    {
      title: 'Databases & Architecture',
      skills: ['MySQL', 'PostgreSQL', 'Redis', 'Google Firebase', 'Client/Server Architecture', 'RESTful APIs']
    },
    {
      title: 'Tools & Practices',
      skills: ['Git', 'Docker', 'AWS', 'Terraform', 'Ansible', 'Automated Testing', 'Linux', 'Agile / Scrum']
    }
  ];

  return (
    <div className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4 md:px-6 max-w-5xl'>
        {/* Header */}
        <motion.div
          className='max-w-3xl mb-16'
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className='text-xs font-bold uppercase tracking-wider text-zinc-500'>
            Background & Experience
          </span>
          <h1 className='mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950'>
            About Me
          </h1>
          <p className='mt-4 text-lg text-zinc-600 leading-relaxed'>
            I am a Software Engineer based in Salem, Oregon, currently developing Windows desktop client/server applications in .NET and MySQL at Open Dental Software.
          </p>
        </motion.div>

        {/* Journey & Experience Grid */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 mb-20'>
          <motion.div
            className='lg:col-span-7 space-y-5 text-zinc-700 leading-relaxed'
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-3'>
              My Background
            </h2>
            <p>
              I graduated from <strong>Oregon State University</strong> in June 2025 with a Bachelor of Science in Computer Science and a <strong>3.90 GPA</strong>, concentrating in Web and Mobile Application Development.
            </p>
            <p>
              Today, I work full-time as a <strong>Software Engineer at Open Dental Software</strong>. My day-to-day work centers on engineering and maintaining high-performance Windows client/server desktop applications that connect directly to MySQL databases. I collaborate closely with engineering teams and technical support to debug complex clinical workflows, optimize database operations, and improve software stability for healthcare providers nationwide.
            </p>
            <p>
              Prior to Open Dental Software, I completed software engineering and QA internships at <strong>Zeek Interactive</strong>, where I developed scalable Laravel and FilamentPHP web applications, constructed RESTful APIs, and led automated cross-platform test suites.
            </p>
            <p>
              Whether working on desktop runtime applications, relational databases, or responsive modern web apps in React and Next.js, I care deeply about writing clean, maintainable, and reliable software.
            </p>

            <div className='pt-4'>
              <Link
                href='/resume'
                className='inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors'
              >
                Read my full resume & experience timeline
                <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div
            className='lg:col-span-5 space-y-4'
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-3'>
              At a Glance
            </h2>

            <div className='rounded-xl border border-zinc-200 bg-zinc-50 p-5 space-y-4 text-sm'>
              <div>
                <span className='block text-xs font-semibold uppercase tracking-wider text-zinc-500'>
                  Current Position
                </span>
                <span className='font-semibold text-zinc-900'>
                  Software Engineer
                </span>
                <span className='block text-zinc-600'>Open Dental Software · Salem, OR</span>
              </div>

              <div className='border-t border-zinc-200/80 pt-3'>
                <span className='block text-xs font-semibold uppercase tracking-wider text-zinc-500'>
                  Education
                </span>
                <span className='font-semibold text-zinc-900'>
                  B.S. in Computer Science
                </span>
                <span className='block text-zinc-600'>Oregon State University · June 2025</span>
                <span className='inline-block mt-1 rounded bg-zinc-200/80 px-2 py-0.5 text-xs font-semibold text-zinc-800'>
                  3.90 GPA
                </span>
              </div>

              <div className='border-t border-zinc-200/80 pt-3'>
                <span className='block text-xs font-semibold uppercase tracking-wider text-zinc-500'>
                  Core Specialization
                </span>
                <span className='block text-zinc-700'>
                  .NET Windows Desktop, MySQL Client/Server, Full-Stack Web Development
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Work On */}
        <div className='mb-20'>
          <h2 className='mb-6 text-2xl font-bold text-zinc-900'>
            Core Focus Areas
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='rounded-xl border border-zinc-200 bg-white p-6 shadow-2xs'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 mb-4'>
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              <h3 className='text-base font-bold text-zinc-900 mb-2'>
                Windows Desktop & .NET
              </h3>
              <p className='text-sm text-zinc-600 leading-relaxed'>
                Building and maintaining robust client/server software in .NET and C#, engineered for high-throughput daily operations and data integrity.
              </p>
            </div>

            <div className='rounded-xl border border-zinc-200 bg-white p-6 shadow-2xs'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 mb-4'>
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' />
                </svg>
              </div>
              <h3 className='text-base font-bold text-zinc-900 mb-2'>
                Databases & Backend Systems
              </h3>
              <p className='text-sm text-zinc-600 leading-relaxed'>
                Architecting relational databases with MySQL and PostgreSQL, optimizing queries, writing secure REST APIs, and automating services.
              </p>
            </div>

            <div className='rounded-xl border border-zinc-200 bg-white p-6 shadow-2xs'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 mb-4'>
                <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                </svg>
              </div>
              <h3 className='text-base font-bold text-zinc-900 mb-2'>
                Modern Web Applications
              </h3>
              <p className='text-sm text-zinc-600 leading-relaxed'>
                Creating responsive, accessible web applications with React, Next.js, Node.js, and modern TypeScript with clean component architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Taxonomy (Clean badges, NO BS percentage bars) */}
        <div>
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-zinc-900'>
              Technical Skills
            </h2>
            <p className='text-sm text-zinc-500 mt-1'>
              Languages, frameworks, and tools I use across desktop, web, and infrastructure engineering.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className='rounded-xl border border-zinc-200 bg-zinc-50/70 p-5'
              >
                <h3 className='text-sm font-bold uppercase tracking-wider text-zinc-700 mb-3'>
                  {cat.title}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className='rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-800 shadow-2xs'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
