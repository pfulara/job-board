'use client';
import DownloadIcon from '@/icons/DownloadIcon';

export default function DownloadCV({ file, name }) {
  const handleDownload = async () => {
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${name.replace(' ', '_')}_CV.pdf`;
        link.click();
      });
  };
  return (
    <div
      className='cursor-pointer flex flex-col items-center'
      onClick={handleDownload}
    >
      <DownloadIcon />
      Downlaod CV
    </div>
  );
}
