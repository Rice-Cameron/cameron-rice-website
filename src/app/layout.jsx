import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cameron Rice - Portfolio",
  description: "Web Developer Portfolio",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className="navbar">
            <li><Link href="/">🏠 Home</Link></li>
            <li><Link href="/about">👤 About Me</Link></li>
            <li><Link href="/resume">📄 Resume</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <h2 style={{ color: 'white' }}>Contact</h2>
          <p style={{ color: 'white' }}>Email: cameron5237@gmail.com</p>
          <p style={{ color: 'white' }}>Phone: (503) 277-9403</p>
        </footer>
      </body>
    </html>
  );
}
