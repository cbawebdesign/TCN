import React from 'react';
import type { FirebaseOptions } from 'firebase/app';
import { FirebaseAppProvider } from 'reactfire';
import { getApp, initializeApp } from 'firebase/app';

function FirebaseAppShell({
  children,
  config,
}: React.PropsWithChildren<{
  config: FirebaseOptions;
}>) {
  // In development, use mock configuration
  const firebaseConfig = process.env.NODE_ENV === 'development' 
    ? {
        apiKey: 'mock-api-key',
        authDomain: 'mock-auth-domain',
        projectId: 'mock-project-id',
        storageBucket: 'mock-storage-bucket',
        messagingSenderId: 'mock-sender-id',
        appId: 'mock-app-id'
      }
    : config;

  // Initialize app only once with a consistent name
  const app = React.useMemo(() => {
    try {
      return getApp('tcn-app');
    } catch (e) {
      return initializeApp(firebaseConfig, 'tcn-app');
    }
  }, [firebaseConfig]);

  return (
    <FirebaseAppProvider firebaseApp={app}>
      {children}
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
