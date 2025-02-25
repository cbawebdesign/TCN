import React, { Suspense } from 'react';
import { FirebaseAppProvider, AuthProvider, FirestoreProvider, DatabaseProvider, useFirebaseApp } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

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

  const firebaseConfig = process.env.NODE_ENV === 'development' ? mockConfig : config;

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div>Loading Firebase...</div>}>
        {children}
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
