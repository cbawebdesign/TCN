import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';

function FirebaseAppShell({ children, config }: React.PropsWithChildren<{ config?: Record<string, string | undefined> }>) {
  // Handle SSR case
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  // Always use the provided config from environment variables
  const firebaseConfig = config;

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div>Loading Firebase...</div>}>
        {children}
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
