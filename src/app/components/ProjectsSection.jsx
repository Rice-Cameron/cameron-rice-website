'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project 1',
      description:
        'A responsive web application with modern UI/UX design principles. Built using React.js and Node.js, featuring real-time updates and interactive elements.',
      image: '/project-placeholder.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '/projects/project1',
      github: 'https://github.com/'
    },
    {
      title: 'Project 2',
      description:
        'A mobile-first e-commerce platform that provides seamless shopping experiences. Implements secure payment processing and user authentication.',
      image: '/project-placeholder.jpg',
      tags: ['Next.js', 'TailwindCSS', 'Stripe'],
      link: '/projects/project2',
      github: 'https://github.com/'
    },
    {
      title: 'Project 3',
      description:
        'A data visualization dashboard that presents complex information in an intuitive interface. Features customizable charts and exportable reports.',
      image: '/project-placeholder.jpg',
      tags: ['JavaScript', 'D3.js', 'Firebase'],
      link: '/projects/project3',
      github: 'https://github.com/'
    }
  ];

  return (
    <section className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            Featured Projects
          </h2>
          <p className='mx-auto max-w-3xl text-xl text-gray-600'>
            Here are some of my recent works that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
