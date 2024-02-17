import Footer from './_components/Footer';
import Header from './_components/Header';

export default function FrontLayout({ children }) {
  return (
    <>
      <Header />
      <main className='flex min-h-[calc(100vh-theme(height.28))] p-4'>
        {children}
      </main>
      <Footer />
    </>
  );
}
