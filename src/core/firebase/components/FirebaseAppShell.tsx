import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';

function FirebaseAppShell({ children, config }: React.PropsWithChildren<{ config: any }>) {
  // Handle SSR case
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  const mockConfig = {
    apiKey: 'mock-api-key',
    authDomain: 'mock-auth-domain',
    projectId: 'mock-project-id',
    storageBucket: 'mock-storage-bucket',
    messagingSenderId: 'mock-sender-id',
    appId: 'mock-app-id'
  };

  // Initialize Firebase app first
  const app = initializeFirebase();
  const firebaseConfig = process.env.NODE_ENV === 'development' ? mockConfig : config;

  if (!app) {
    return <>{children}</>; // Return children for SSR
  }

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div>Loading Firebase...</div>}>
        {children}
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
