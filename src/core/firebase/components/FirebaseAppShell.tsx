import React, { Suspense } from 'react';
import { FirebaseAppProvider, AuthProvider, FirestoreProvider, DatabaseProvider, useFirebaseApp } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

function FirebaseProviders({ children }: React.PropsWithChildren) {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const database = getDatabase(app);

  return (
    <Suspense fallback={<div>Loading Firebase Services...</div>}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={firestore}>
          <DatabaseProvider sdk={database}>
            {children}
          </DatabaseProvider>
        </FirestoreProvider>
      </AuthProvider>
    </Suspense>
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
    <FirebaseAppProvider firebaseApp={app}>
      <Suspense fallback={<div>Loading Firebase...</div>}>
        <FirebaseProviders>
          {children}
        </FirebaseProviders>
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
