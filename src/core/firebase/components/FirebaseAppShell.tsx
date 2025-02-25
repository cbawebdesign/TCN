import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { initializeFirebase } from '../utils/initialize-firebase';

function FirebaseAppShell({ children }: React.PropsWithChildren) {
  const app = initializeFirebase();
  
  if (!app) {
    return <>{children}</>; // Return children for SSR
  }

  return (
    <FirebaseAppProvider firebaseApp={app}>
      {children}
    </FirebaseAppProvider>
  );
}

export default FirebaseAppShell;
