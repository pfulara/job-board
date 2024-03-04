import Providers from '@/providers/Providers';
import './globals.css';

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
      <body className='min-h-screen bg-secondary-dark text-text-dark relative'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
