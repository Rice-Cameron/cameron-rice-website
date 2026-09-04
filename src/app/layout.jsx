import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cameron Rice — Software Engineer',
  description:
    'Software Engineer at Open Dental Software specializing in .NET Windows desktop applications, client/server architecture, and modern web systems. Oregon State University CS graduate (3.90 GPA).'
};

export default function Layout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} bg-[#fafafa] text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white`}>
        <Navbar />
        <main className='min-h-screen pt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
