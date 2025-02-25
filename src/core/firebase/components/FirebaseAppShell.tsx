import React from 'react';
import type { FirebaseOptions } from 'firebase/app';
import { FirebaseAppProvider } from 'reactfire';
import { getApp, initializeApp } from 'firebase/app';

const mockConfig = {
  apiKey: 'mock-api-key',
  authDomain: 'mock-auth-domain',
  projectId: 'mock-project-id',
  storageBucket: 'mock-storage-bucket',
  messagingSenderId: 'mock-sender-id',
  appId: 'mock-app-id'
};

// Initialize Firebase app only once
let app: any;
try {
  app = getApp();
} catch {
  app = initializeApp(
    process.env.NODE_ENV === 'development' ? mockConfig : config,
    'tcn-app'
  );
}

function FirebaseAppShell({
  children,
  config,
}: React.PropsWithChildren<{
  config: FirebaseOptions;
}>) {
  return (
    <FirebaseAppProvider firebaseApp={app}>
      {children}
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
