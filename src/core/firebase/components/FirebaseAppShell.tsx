import React, { Suspense, useEffect } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeApp, getApps } from 'firebase/app';

function FirebaseAppShell({ children, config }: React.PropsWithChildren<{ config?: Record<string, any> }>) {
  useEffect(() => {
    // Initialize Firebase app on client-side only
    if (typeof window !== 'undefined' && config) {
      try {
        const apps = getApps();
        if (!apps.length) {
          initializeApp(config);
        }
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
