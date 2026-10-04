'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export const projects = [
  {
    title: 'SysPulse',
    description:
      'A modern cross-platform Linux desktop system monitor built with .NET, Avalonia UI, and Entity Framework Core. Gathers kernel metrics directly from /proc and sysfs with zero P/Invoke overhead, featuring SQLite/MySQL snapshot persistence and theme switching.',
    image: '/syspulse.png',
    tags: ['C#', '.NET 9', 'Avalonia UI', 'XAML', 'MVVM', 'EF Core', 'Linux'],
    link: '/projects/syspulse',
    github: 'https://github.com/Rice-Cameron/SysPulse'
  },
  {
    title: 'ricebowl',
    description:
      'A blazing fast, asynchronous terminal user interface (TUI) for tracking live NCAA College Football scores, play-by-play, box scores, and field position on a dynamic 100-yard ASCII field. Built with Rust, Ratatui, and Tokio. Go Beavs!',
    image: '/ricebowl.png',
    tags: ['Rust', 'Ratatui', 'Tokio (Async)', 'TUI', 'REST API', 'Linux'],
    link: '/projects/ricebowl',
    github: 'https://github.com/Rice-Cameron/ricebowl'
  },
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
      'A modern full-stack web application designed for tracking, analyzing, and organizing algorithmic solutions, time/space complexity notes, and interview prep metrics.',
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
    title: 'Automated Minecraft Server Deployment',
    description:
      'Infrastructure as Code (IaC) project demonstrating modern DevOps practices on AWS. Uses Terraform for cloud infrastructure provisioning and Ansible for automated server configuration and security.',
    image: '/devops.svg',
    tags: ['Terraform', 'Ansible', 'AWS EC2', 'DevOps', 'Linux'],
    link: '/projects/minecraft-server-deployment',
    github: 'https://github.com/Rice-Cameron/CS312CourseProjectPt2'
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
          <h2 className='text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl'>
            Featured Projects
          </h2>
          <p className='mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed'>
            A collection of engineering projects spanning high-performance systems programming in Rust, desktop UI with .NET and Avalonia, distributed backend services, and modern full-stack web applications.
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
