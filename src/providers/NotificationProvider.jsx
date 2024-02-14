'use client';
import Notification from '@/components/Notification';
import { createContext, useEffect, useState } from 'react';

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [context, setContext] = useState({
    status: null,
    message: '',
  });

  useEffect(() => {
    if (context.message) {
      setTimeout(() => {
        setContext({
          status: null,
          message: '',
        });
      }, 3000);
    }
  }, [context]);
  return (
    <NotificationContext.Provider
      value={{ context, setContext }}
    >
      {children}
      {context.message && (
        <Notification
          message={context.message}
          status={context.status}
        />
      )}
    </NotificationContext.Provider>
  );
}
