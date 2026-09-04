'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import resume from '@/data/resumeData.json';

export default function ResumeSectionContainer() {
  const [viewMode, setViewMode] = useState('structured'); // 'structured' | 'pdf'

  return (
    <div className='py-12 md:py-20 bg-[#fafafa] min-h-screen'>
      <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
        {/* Header & Controls */}
        <motion.div
          className='mb-10 text-center'
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className='text-xs font-bold uppercase tracking-wider text-zinc-500'>
            Curriculum Vitae
          </span>
          <h1 className='mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950'>
            Resume
          </h1>
          <p className='mt-3 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto'>
            Professional experience, education, and technical competencies.
          </p>

          {/* Action Bar */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            {/* Download Button */}
            <a
              href='/CameronRiceResume.pdf'
              download
              className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800'
            >
              <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              Download PDF
            </a>

            {/* View Mode Toggle */}
            <div className='inline-flex rounded-lg border border-zinc-200 bg-white p-1 shadow-2xs text-xs font-medium text-zinc-700'>
              <button
                type='button'
                onClick={() => setViewMode('structured')}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  viewMode === 'structured'
                    ? 'bg-zinc-900 text-white font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Structured View
              </button>
              <button
                type='button'
                onClick={() => setViewMode('pdf')}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-zinc-900 text-white font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                PDF Preview
              </button>
            </div>
          </div>
        </motion.div>

        {/* View Mode: PDF Viewer */}
        {viewMode === 'pdf' ? (
          <div className='rounded-2xl border border-zinc-200 bg-white p-2 sm:p-4 shadow-sm'>
            <div className='flex items-center justify-between pb-3 px-2 border-b border-zinc-100 mb-3 text-xs text-zinc-500'>
              <span>Displaying <strong>CameronRiceResume.pdf</strong></span>
              <a
                href='/CameronRiceResume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-900 font-semibold hover:underline inline-flex items-center gap-1'
              >
                Open full window
                <svg className='h-3.5 w-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </a>
            </div>
            <div className='w-full h-[850px] rounded-lg overflow-hidden border border-zinc-200'>
              <iframe
                src='/CameronRiceResume.pdf'
                className='w-full h-full'
                title='Cameron Rice Resume PDF'
              />
            </div>
          </div>
        ) : (
          /* View Mode: Structured Resume */
          <div className='rounded-2xl border border-zinc-200 bg-white p-6 sm:p-10 md:p-12 shadow-xs space-y-12'>
            {/* Resume Header */}
            <div className='border-b border-zinc-200 pb-8'>
              <div className='flex flex-col sm:flex-row sm:items-baseline justify-between gap-2'>
                <div>
                  <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950'>
                    {resume.name}
                  </h2>
                  <p className='text-sm sm:text-base font-medium text-zinc-600 mt-1'>
                    {resume.title || 'Software Engineer'}
                  </p>
                </div>
              </div>

              {/* Contact & Links Bar */}
              <div className='mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-600'>
                {resume.contact?.email && (
                  <a
                    href={`mailto:${resume.contact.email}`}
                    className='inline-flex items-center gap-1.5 hover:text-zinc-950 font-medium'
                  >
                    <svg className='h-3.5 w-3.5 text-zinc-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                    {resume.contact.email}
                  </a>
                )}
                {resume.contact?.github && (
                  <a
                    href={resume.contact.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 hover:text-zinc-950 font-medium'
                  >
                    <span>GitHub: Rice-Cameron</span>
                  </a>
                )}
                {resume.contact?.linkedin && (
                  <a
                    href={resume.contact.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 hover:text-zinc-950 font-medium'
                  >
                    <span>LinkedIn: rice-cameron</span>
                  </a>
                )}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6'>
                Work Experience
              </h3>

              <div className='space-y-8'>
                {resume.experience?.map((exp, idx) => (
                  <div key={idx} className='group'>
                    <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between'>
                      <div>
                        <h4 className='text-base font-bold text-zinc-950'>
                          {exp.role}
                        </h4>
                        <div className='text-sm font-medium text-zinc-700'>
                          {exp.company}
                        </div>
                      </div>
                      <span className='text-xs font-medium text-zinc-500 mt-1 sm:mt-0'>
                        {exp.period}
                      </span>
                    </div>

                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className='mt-3 space-y-1.5 text-sm text-zinc-600 list-disc pl-4 leading-relaxed'>
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className='border-t border-zinc-100 pt-8'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6'>
                Education
              </h3>

              <div className='space-y-4'>
                {resume.education?.map((edu, idx) => (
                  <div key={idx} className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between'>
                    <div>
                      <h4 className='text-base font-bold text-zinc-950'>
                        {edu.degree || 'Bachelor of Science in Computer Science'}
                      </h4>
                      <div className='text-sm text-zinc-700'>
                        {edu.institution}
                        {edu.gpa && (
                          <span className='ml-2 inline-flex items-center rounded bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-800'>
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className='text-xs font-medium text-zinc-500 mt-1 sm:mt-0'>
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            {resume.projects && resume.projects.length > 0 && (
              <div className='border-t border-zinc-100 pt-8'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6'>
                  Key Projects
                </h3>

                <div className='space-y-6'>
                  {resume.projects.map((proj, idx) => (
                    <div key={idx}>
                      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between'>
                        <h4 className='text-base font-bold text-zinc-950'>
                          {proj.title}
                          {proj.subtitle && (
                            <span className='text-sm font-normal text-zinc-500 ml-1.5'>
                              — {proj.subtitle}
                            </span>
                          )}
                        </h4>
                      </div>

                      {proj.bullets && proj.bullets.length > 0 && (
                        <ul className='mt-2 space-y-1 text-sm text-zinc-600 list-disc pl-4 leading-relaxed'>
                          {proj.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Skills Section */}
            <div className='border-t border-zinc-100 pt-8'>
              <h3 className='text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6'>
                Technical Skills
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {resume.skills?.languages && resume.skills.languages.length > 0 && (
                  <div className='rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4'>
                    <h5 className='text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2.5'>
                      Languages
                    </h5>
                    <div className='flex flex-wrap gap-1.5'>
                      {resume.skills.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className='rounded bg-white border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-800'
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {resume.skills?.frameworksAndTools && resume.skills.frameworksAndTools.length > 0 && (
                  <div className='rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 md:col-span-2'>
                    <h5 className='text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2.5'>
                      Frameworks, Databases & Tools
                    </h5>
                    <div className='flex flex-wrap gap-1.5'>
                      {resume.skills.frameworksAndTools.map((tool, idx) => (
                        <span
                          key={idx}
                          className='rounded bg-white border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-800'
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
