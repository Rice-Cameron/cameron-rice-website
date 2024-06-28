import React from 'react'
import Link from 'next/link';

export default function page() {
    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-4xl font-bold'>Page</h1>
                <Link href='/users'>Users</Link>
            </div>
        </section>
    )
}