'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function MinecraftServerDeployment() {
  return (
    <div className='container mx-auto px-4 py-16 md:px-6 max-w-4xl'>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href='/projects'
          className='inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-6'
        >
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          Back to Projects
        </Link>

        <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950'>
          Automated Minecraft Server Deployment
        </h1>
        <p className='mt-3 text-lg text-zinc-600 leading-relaxed'>
          Infrastructure as Code (IaC) and configuration management project utilizing Terraform and Ansible to automatically provision, harden, and manage AWS EC2 game servers.
        </p>

        <div className='mt-8 mb-12 flex h-80 sm:h-96 w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-4'>
          <Image
            className='h-full w-auto max-w-full rounded-lg object-contain shadow-xs'
            src='/devops.svg'
            width={500}
            height={400}
            alt='DevOps Architecture'
          />
        </div>

        <div className='mb-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4 text-zinc-700 leading-relaxed'>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2'>
              DevOps & Infrastructure Design
            </h2>
            <p>
              This project demonstrates cloud automation best practices. Terraform scripts define VPC networking, security groups, subnets, and EC2 compute instances on AWS with idempotent declarations.
            </p>
            <p>
              Once provisioned, Ansible playbooks handle OS configuration, automated Java runtime dependencies, systemd daemon configuration, firewall rules, and automated backup routines with zero manual console intervention.
            </p>
          </div>

          <div>
            <h2 className='text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mb-4'>
              Technologies Used
            </h2>
            <div className='flex flex-wrap gap-2'>
              {['Terraform', 'Ansible', 'AWS EC2', 'VPC & Security Groups', 'Linux (Ubuntu)', 'DevOps'].map((tech) => (
                <span
                  key={tech}
                  className='rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-3 pt-6 border-t border-zinc-200'>
          <a
            href='https://github.com/Rice-Cameron/CS312CourseProjectPt2'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800'
          >
            View GitHub Repository
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
