'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Lavender',
      description:
        'A responsive web application with modern UI/UX design principles. Built using React.js and Google Firebase, aimed to help the lives of those who suffer from Shift Work Sleep Disorder.',
      image: '/lavender.png',
      tags: ['React', 'Firebase', 'Vite'],
      link: '/projects/lavender'
    },
    {
      title: 'Budget Tracker',
      description:
        'One of my first ever projects that I built using vanilla JavaScript. It is a simple budget tracker that helps users keep track of their expenses and income.',
      image: '/budget-tracker.png',
      tags: ['JavaScript', 'HTML', 'CSS', 'Handlebars', 'Node.js'],
      link: '/projects/budget-tracker',
      github: 'https://github.com/Rice-Cameron/js-budget-tracker'
    },
    {
      title: 'Planet API Mobile App',
      description:
        'A very simple Kotlin mobile application that fetches data from the API Ninjas Planets API and displays it. This project was built using Android Studio.',
      image: '/planets.png',
      tags: ['Kotlin', 'Android Studio'],
      link: '/projects/planets',
      github: 'https://github.com/Rice-Cameron/kotlin-planet-app'
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
