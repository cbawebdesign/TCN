import React, { Suspense } from 'react';
import { FirebaseAppProvider, AuthProvider, FirestoreProvider } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return (
    <FirebaseAppProvider firebaseApp={app} suspense={true}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={firestore}>
          <Suspense fallback={<div>Loading Firebase...</div>}>
            {children}
          </Suspense>
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
