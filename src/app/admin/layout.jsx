import Header from './_components/Header';
import Sidebar from './_components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <main className='lg:grid grid-cols-6 lg:min-h-[calc(100vh-theme(height.16))]'>
        <Sidebar />
        <div className='col-span-5 relative p-4'>
          {children}
        </div>
      </main>
    </>
  );
}
