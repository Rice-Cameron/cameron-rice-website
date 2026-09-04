'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export const projects = [
  {
    title: 'Lavender',
    description:
      'A full-stack React and Google Firebase web application designed to automate sleep scheduling for shift workers. Developed as a Senior Capstone project at Oregon State University in partnership with sleep psychology researchers.',
    image: '/lavender.png',
    tags: ['React', 'Firebase Auth/Firestore', 'Cloud Functions', 'Vite'],
    link: '/projects/lavender',
    github: null
  },
  {
    title: 'LeetLog',
    description:
      'A modern full-stack web application for logging, analyzing, and organizing algorithmic solutions. Built with Next.js and TypeScript, featuring time/space complexity metadata tracking, rich notes, and PostgreSQL persistence.',
    image: '/leetlog.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    link: '/projects/leetlog',
    github: 'https://github.com/Rice-Cameron/LeetLog'
  },
  {
    title: 'API Rate Limiter Microservice',
    description:
      'A production-ready backend microservice implementing the Token Bucket rate-limiting algorithm using Redis and Go. Features global and per-client quotas, health metrics, and Docker containerization.',
    image: '/rate-limit.png',
    tags: ['Go', 'Redis', 'Docker', 'Microservices', 'REST API'],
    link: '/projects/api-rate-limiter-microservice',
    github: 'https://github.com/Rice-Cameron/api-rate-limiter-microservice'
  },
  {
    title: 'Time-Tracked Invoice Generator',
    description:
      'A comprehensive Django and Python backend service that enables client management, granular project time tracking, automated PDF invoice generation, and Stripe payment webhook integrations.',
    image: '/django.png',
    tags: ['Python', 'Django', 'REST API', 'Stripe', 'PDF Generation', 'Celery'],
    link: '/projects/invoice-generator',
    github: 'https://github.com/Rice-Cameron/invoice-generator'
  },
  {
    title: 'Automated Minecraft Server Deployment',
    description:
      'Infrastructure as Code (IaC) project demonstrating modern DevOps practices on AWS. Uses Terraform for cloud infrastructure provisioning and Ansible for automated server configuration and security.',
    image: '/devops.svg',
    tags: ['Terraform', 'Ansible', 'AWS EC2', 'DevOps', 'Linux'],
    link: '/projects/minecraft-server-deployment',
    github: 'https://github.com/Rice-Cameron/CS312CourseProjectPt2'
  },
  {
    title: 'Planet API Mobile App',
    description:
      'Native Android application built with Kotlin and Android Studio. Fetches celestial astronomical data from API Ninjas, with responsive UI rendering and local data handling.',
    image: '/planets.png',
    tags: ['Kotlin', 'Android Studio', 'REST API', 'Mobile'],
    link: '/projects/planets',
    github: 'https://github.com/Rice-Cameron/kotlin-planet-app'
  }
];

export default function ProjectsSection() {
  return (
    <section className='py-16 md:py-24 bg-[#fafafa]'>
      <div className='container mx-auto px-4 md:px-6 max-w-6xl'>
        <motion.div
          className='mb-12 max-w-2xl'
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className='text-xs font-bold uppercase tracking-wider text-zinc-500'>
            Portfolio
          </span>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl'>
            Featured Projects
          </h2>
          <p className='mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed'>
            A collection of engineering projects spanning full-stack web applications, distributed backend services, mobile development, and cloud infrastructure.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
}
