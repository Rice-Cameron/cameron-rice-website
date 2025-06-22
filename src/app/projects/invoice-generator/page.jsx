'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function InvoiceGenerator() {
  return (
    <div className='container mx-auto px-4 py-20 md:px-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='mb-6 text-4xl font-bold text-gray-900'>
          Time-Tracked Invoice Generator
        </h1>
        <p className='mb-8 text-lg text-gray-600'>
          A comprehensive Django-based backend service that allows freelancers
          to manage clients, track time, and generate professional invoices with
          PDF generation and Stripe payment integration. Features include client
          management, project tracking, time logging, recurring invoices, and
          automated email notifications.
        </p>

        <div className='mb-12 flex h-96 w-full items-center justify-center rounded-lg bg-gray-200 text-gray-400'>
          <Image
            className='h-96 w-full rounded-lg object-contain'
            src='/django.png'
            width={384}
            height={384}
            alt='Time-Tracked Invoice Generator'
          />
        </div>

        <div className='mb-10 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              About this project
            </h2>
            <p className='text-gray-600'>
              This project is a comprehensive backend solution for freelancers
              to manage their business operations efficiently. It provides a
              complete suite of tools for client management, time tracking, and
              invoice generation with modern features like Stripe integration
              and automated recurring invoices.
            </p>
          </div>
          <div>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>
              Technologies Used
            </h2>
            <ul className='list-disc pl-5 text-gray-600'>
              <li>Python 3.11+</li>
              <li>Django 5.0.2</li>
              <li>Django REST Framework</li>
              <li>Stripe Payment Integration</li>
              <li>WeasyPrint for PDF Generation</li>
              <li>Celery for Background Tasks</li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center gap-4'>
          <Link
            href='https://github.com/cameron-rice/invoice-generator'
            className='inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700'
          >
            View on GitHub
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
