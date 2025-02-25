import React from 'react';
import { AuthProvider } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { initializeFirebase } from '../utils/initialize-firebase';

export function MockFirebaseAuthProvider({ children }: React.PropsWithChildren) {
  const app = initializeFirebase();
  
  if (!app) {
    return <>{children}</>; // Return children for SSR
  }

  const auth = getAuth(app);
  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
}

export default MockFirebaseAuthProvider;
