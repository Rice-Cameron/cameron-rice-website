'use client';

import { motion } from 'framer-motion';

const ResumeSectionContainer = () => {
  return (
    <div className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <motion.div
          className='mx-auto mb-16 max-w-3xl text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
            Resume
          </h1>
          <p className='text-xl text-gray-600'>
            My professional journey, experience, and qualifications
          </p>

          <div className='mt-8'>
            <a
              href='/CameronRiceRESUME.pdf'
              download
              className='inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download Resume
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
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </a>
          </div>
        </motion.div>

        <div className='mx-auto max-w-5xl'>
          {/* Experience Section */}
          <ResumeSection
            title='Experience'
            items={[
              {
                title: 'Software Engineering Intern',
                organization: 'Zeek Interactive Inc.',
                period: 'Jun 2024 - Sept 2024',
                description: [
                  'Developed applications using Laravel and FilamentPHP.',
                  'Collaborated with teams to create high-quality software solutions.',
                  'Enhanced workplace communication and teamwork skills.'
                ]
              },
              {
                title: 'QA Support Intern',
                organization: 'Zeek Interactive Inc.',
                period: 'Jun 2023 - Sept 2023',
                description: [
                  'Created API endpoints.',
                  'Verified pages for cross-browser compatibility.',
                  'Ensured the quality of new features.'
                ]
              }
            ]}
          />

          {/* Education Section */}
          <ResumeSection
            title='Education'
            items={[
              {
                title: 'B.S. Computer Science',
                organization: 'Oregon State University',
                period: '2021 - Present',
                description: [
                  'GPA: 3.88',
                  'Concentration: Web and Mobile Application Development'
                ]
              }
            ]}
          />

          {/* Skills Section */}
          <div className='mb-16'>
            <motion.h2
              className='relative mb-8 border-l-4 border-blue-600 pl-4 text-2xl font-bold text-gray-900'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills
            </motion.h2>

            <motion.div
              className='grid grid-cols-1 gap-6 md:grid-cols-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SkillCategory
                title='Languages'
                skills={['PHP', 'JavaScript', 'Python', 'C/C++']}
              />

              <SkillCategory
                title='Tools & Frameworks'
                skills={['Laravel', 'React & NextJS', 'Git & GitHub', 'MySQL']}
              />

              <SkillCategory
                title='Soft Skills'
                skills={['Communication', 'Problem-Solving', 'Time Management']}
              />

              <SkillCategory
                title='Relevant Courses'
                skills={[
                  'Web Development',
                  'Mobile App Development',
                  'Software Engineering I/II',
                  'Database Management Systems',
                  'Data Structures & Algorithms',
                  'Usability Engineering'
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeSection = ({ title, items }) => {
  return (
    <div className='mb-16'>
      <motion.h2
        className='relative mb-8 border-l-4 border-blue-600 pl-4 text-2xl font-bold text-gray-900'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className='space-y-8'>
        {items.map((item, index) => (
          <ResumeItem
            key={index}
            title={item.title}
            organization={item.organization}
            period={item.period}
            description={item.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

const ResumeItem = ({
  title,
  organization,
  period,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      className='flex flex-col md:flex-row'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + delay }}
    >
      <div className='mb-2 md:mb-0 md:w-1/3'>
        <span className='block text-sm text-gray-500'>{period}</span>
        <span className='font-medium text-gray-800'>{organization}</span>
      </div>

      <div className='border-l border-gray-200 md:w-2/3 md:pl-8'>
        <h3 className='mb-3 text-xl font-bold text-gray-900'>{title}</h3>
        <ul className='list-disc space-y-1 pl-5 text-gray-600'>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className='rounded-lg bg-white p-6 shadow-sm'>
      <h3 className='mb-4 text-lg font-bold text-gray-900'>{title}</h3>
      <ul className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <li
            key={index}
            className='rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700'
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSectionContainer;
