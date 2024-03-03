import React, { Suspense } from 'react';
import UploadFileForm from './UploadFileForm';
import Loader from '@/app/loader';

export default function UploadFilesPage() {
  return (
    <Suspense fallback={<Loader />}>
      <UploadFileForm />
    </Suspense>
  );
}
