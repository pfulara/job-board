import Sidebar from './Sidebar';

export default async function SettingLayout({ children }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 h-full relative'>
      <div className='h-full'>
        <Sidebar />
      </div>
      <div className='col-span-3 mt-4 lg:mt-0'>
        {children}
      </div>
    </div>
  );
}
