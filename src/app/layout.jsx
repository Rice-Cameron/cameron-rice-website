import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.cameronrice.net'),
  title: 'Cameron Rice — Software Engineer',
  description:
    'Software Engineer at Open Dental Software working on core .NET Windows desktop software, client/server architecture, and modern web systems. Oregon State University CS graduate (3.90 GPA).',
  openGraph: {
    title: 'Cameron Rice — Software Engineer',
    description:
      'Software Engineer at Open Dental Software. Specializing in .NET Windows desktop engineering, systems programming, and modern web applications.',
    url: 'https://www.cameronrice.net',
    siteName: 'Cameron Rice Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/headshotpfp.jpeg',
        width: 800,
        height: 800,
        alt: 'Cameron Rice — Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Cameron Rice — Software Engineer',
    description:
      'Software Engineer at Open Dental Software. .NET desktop systems, Rust, and modern web engineering.',
    images: ['/headshotpfp.jpeg']
  }
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
