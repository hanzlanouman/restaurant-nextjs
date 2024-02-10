import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Resturant App',
  description: 'A simple resturant app built with Next.js and MongoDB',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning suppressContentEditableWarning>
      <body className={inter.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
