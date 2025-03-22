import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cameron Rice - Portfolio',
  description: 'Web Developer Portfolio'
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen pt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
