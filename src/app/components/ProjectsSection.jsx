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
      tags: ['Firebase', 'React', 'JavaScript', 'Vite'],
      link: '/projects/lavender'
    },
    {
      title: 'LeetLog',
      description:
        "A modern web application for tracking and organizing your LeetCode problem solving journey. LeetLog helps you keep track of the problems you've solved, your solutions, and important metadata like time and space complexity.",
      image: '/leetlog.png',
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'Neon (PostgreSQL)'
      ],
      link: '/projects/leetlog',
      github: 'https://github.com/Rice-Cameron/LeetLog'
    },
    {
      title: 'API Rate Limiter Microservice',
      description:
        'A production-ready backend microservice for API rate limiting using the Token Bucket algorithm and Redis. Designed for high performance, clarity, and easy integration. Features global and per-client rate limits, REST API endpoints, configurable environment variables, and Docker support for seamless deployment.',
      image: '/rate-limit.png',
      tags: ['Go', 'Redis', 'Docker', 'Microservices', 'API'],
      link: '/projects/api-rate-limiter-microservice',
      github: 'https://github.com/Rice-Cameron/api-rate-limiter-microservice'
    },
    {
      title: 'Time-Tracked Invoice Generator',
      description:
        'A comprehensive Django-based backend service that allows freelancers to manage clients, track time, and generate professional invoices with PDF generation and Stripe payment integration. Features include client management, project tracking, time logging, recurring invoices, and automated email notifications.',
      image: '/django.png',
      tags: [
        'Python',
        'Django',
        'REST API',
        'Stripe',
        'PDF Generation',
        'Celery'
      ],
      link: '/projects/invoice-generator',
      github: 'https://github.com/Rice-Cameron/invoice-generator'
    },
    {
      title: 'Automated Minecraft Server Deployment',
      description:
        'This project demonstrates modern DevOps practices by automating the deployment and configuration of a Minecraft server on AWS. Using Terraform and Ansible, it provisions cloud resources and configures the server with minimal manual intervention. The solution includes secure key management, automated provisioning, and step-by-step deployment instructions.',
      image: '/devops.svg',
      tags: ['Terraform', 'Ansible', 'AWS', 'EC2', 'DevOps'],
      link: '/projects/minecraft-server-deployment',
      github: 'https://github.com/Rice-Cameron/CS312CourseProjectPt2'
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
            experience in web and mobile development.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div key={index} className='h-full'>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
