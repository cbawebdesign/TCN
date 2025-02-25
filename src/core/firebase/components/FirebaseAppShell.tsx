import React, { Suspense } from 'react';
import {
  FirebaseAppProvider,
  AuthProvider,
  useFirebaseApp,
  FirestoreProvider,
  DatabaseProvider,
  useInitFirestore
} from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

function FirebaseProviders({ children }: React.PropsWithChildren) {
  const app = useFirebaseApp();
  
  // Initialize services
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const database = getDatabase(app);

  // Initialize Firestore
  const { status, error } = useInitFirestore(async (firestoreInstance) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Initializing Firestore in development mode');
    }
    return getFirestore(app);
  });

  if (status === 'loading') {
    return <div>Loading Firestore...</div>;
  }

  if (error) {
    console.error('Error initializing Firestore:', error);
    return <div>Error loading Firestore</div>;
  }

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <DatabaseProvider sdk={database}>
          <Suspense fallback={<div>Loading Firebase...</div>}>
            {children}
          </Suspense>
        </DatabaseProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

function FirebaseAppShell({ children }: React.PropsWithChildren) {
  const app = initializeFirebase();

  // Handle SSR case
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  if (!app) {
    console.error('Failed to initialize Firebase app');
    return <>{children}</>;
  }

  return (
    <FirebaseAppProvider firebaseApp={app} suspense={true}>
      <Suspense fallback={<div>Loading Firebase...</div>}>
        <FirebaseProviders>
          {children}
        </FirebaseProviders>
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
