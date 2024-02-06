import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Job Board',
    template: '%s | Job Board',
  },
  description: 'Best job board ever!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-secondary-dark text-text-dark'>
        {children}
      </body>
    </html>
  );
}
