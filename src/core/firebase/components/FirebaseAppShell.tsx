import React from 'react';
import type { FirebaseOptions } from 'firebase/app';
import { FirebaseAppProvider } from 'reactfire';
import { getApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const mockConfig = {
  apiKey: 'AIzaSyDOCAbC123dEf456GhI789jKl012MnO',  // Mock API key that looks valid
  authDomain: 'mock-auth-domain',
  projectId: 'mock-project-id',
  storageBucket: 'mock-storage-bucket',
  messagingSenderId: 'mock-sender-id',
  appId: 'mock-app-id',
  measurementId: 'G-MEASUREMENT_ID'
};

// Initialize Firebase app only once
// Initialize Firebase app only once
const getFirebaseApp = () => {
  if (typeof window === 'undefined') {
    return {} as any; // Return empty object for SSR
  }

  try {
    return getApp();
  } catch {
    const config = process.env.NODE_ENV === 'development' ? mockConfig : (window as any).__FIREBASE_CONFIG__ || {};
    const app = initializeApp(config);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Initialized Firebase app in development mode');
    }
    
    return app;
  }
};

const app = getFirebaseApp();

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
