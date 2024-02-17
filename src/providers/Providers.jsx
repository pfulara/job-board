import NotificationProvider from '@/providers/NotificationProvider';

export default function Providers({ children }) {
  return (
    <NotificationProvider>{children}</NotificationProvider>
  );
}
