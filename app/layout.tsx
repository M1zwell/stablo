import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Research Hub</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">About</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              <Link href="/archive" className="hover:text-gray-300">Archive</Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Research Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}