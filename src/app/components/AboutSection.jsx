'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 65 },
    { name: 'Node.js', level: 75 },
    { name: 'PHP/Laravel', level: 80 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Git', level: 90 }
  ];

  return (
    <div className='py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <motion.div
          className='mx-auto mb-16 max-w-3xl text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
            About Me
          </h1>
          <p className='text-xl text-gray-600'>
            Passionate web developer with expertise in modern technologies and a
            focus on creating exceptional user experiences.
          </p>
        </motion.div>

        <div className='mb-20 grid grid-cols-1 gap-16 md:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className='mb-6 border-b border-gray-200 pb-3 text-2xl font-bold text-gray-900'>
              My Journey
            </h2>
            <div className='space-y-6 text-gray-600'>
              <p>
                Hi! I'm Cameron Rice, a backend-focused web developer with a
                passion for building scalable and efficient web applications. My
                journey in web development began during my studies at Oregon
                State University, where I developed a strong interest in
                designing robust backend systems that power dynamic and
                responsive applications.
              </p>
              <p>
                Throughout my academic and professional career, I've worked
                extensively with technologies like PHP, Laravel, JavaScript,
                Node.js, and MySQL, specializing in authentication, database
                management, and API development. I also have experience with
                React and Next.js, allowing me to bridge backend functionality
                with frontend performance.
              </p>
              <p>
                My internship experiences at Zeek Interactive have given me
                hands-on experience in developing real-world applications,
                ensuring backend stability, optimizing performance, and
                collaborating with teams to deliver high-quality software
                solutions. I'm always eager to explore new technologies and best
                practices to refine my backend development expertise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className='mb-6 border-b border-gray-200 pb-3 text-2xl font-bold text-gray-900'>
              Technical Skills
            </h2>
            <div className='space-y-4'>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className='mb-1 flex justify-between'>
                    <span className='font-medium text-gray-700'>
                      {skill.name}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {skill.level}%
                    </span>
                  </div>
                  <div className='h-2 w-full rounded-full bg-gray-200'>
                    <motion.div
                      className='h-2 rounded-full bg-blue-600'
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className='rounded-2xl bg-gray-50 p-8 md:p-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className='mb-6 text-center text-2xl font-bold text-gray-900'>
            My Approach
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                <svg
                  className='h-8 w-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>
                Innovation
              </h3>
              <p className='text-gray-600'>
                Always exploring new technologies and approaches to create
                cutting-edge solutions.
              </p>
            </div>

            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                <svg
                  className='h-8 w-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>
                Adaptability
              </h3>
              <p className='text-gray-600'>
                Quickly adapting to project requirements and changing
                technologies in the development landscape.
              </p>
            </div>

            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                <svg
                  className='h-8 w-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>
                Collaboration
              </h3>
              <p className='text-gray-600'>
                Working effectively with teams to bring ideas to life and
                deliver successful projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
