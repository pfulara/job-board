import { Suspense } from 'react';
import SettingsPage from './SettingsPage';
import Loader from '@/app/loader';

export default function Settings() {
  return (
    <Suspense fallback={<Loader />}>
      <SettingsPage />
    </Suspense>
  );
}
