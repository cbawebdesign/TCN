import React from 'react';
import { AuthProvider } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'mock-api-key',
  authDomain: 'mock-auth-domain',
  projectId: 'mock-project-id',
  storageBucket: 'mock-storage-bucket',
  messagingSenderId: 'mock-sender-id',
  appId: 'mock-app-id'
};

const app = getApp();
const auth = getAuth(app);

export function MockFirebaseAuthProvider({ children }: React.PropsWithChildren) {
  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
}

export default MockFirebaseAuthProvider;
