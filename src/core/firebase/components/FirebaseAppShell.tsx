import React, { Suspense, useEffect } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeApp } from 'firebase/app';

function FirebaseAppShell({ children, config }: React.PropsWithChildren<{ config?: Record<string, string | undefined> }>) {
  useEffect(() => {
    // Initialize Firebase app on client-side only
    if (typeof window !== 'undefined' && config) {
      try {
        initializeApp(config);
      } catch (error) {
        console.error('Firebase initialization error:', error);
      }
    }
  }, [config]);

  // Handle SSR case
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <FirebaseAppProvider firebaseConfig={config || {}}>
      <Suspense fallback={<div>Loading Firebase...</div>}>
        {children}
      </Suspense>
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
