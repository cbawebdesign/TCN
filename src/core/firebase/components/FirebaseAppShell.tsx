import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';

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
        {children}
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
