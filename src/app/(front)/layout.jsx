import Footer from './_components/Footer';
import Header from './_components/Header';

export default function FrontLayout({ children }) {
  return (
    <>
      <Header />
      <main className='pb-10'>{children}</main>
      <Footer />
    </>
  );
}
