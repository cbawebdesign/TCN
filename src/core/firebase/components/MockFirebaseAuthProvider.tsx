import React from 'react';
import { AuthProvider } from 'reactfire';
import { Auth, User } from 'firebase/auth';

// Mock Firebase Auth SDK
const mockAuth: Partial<Auth> = {
  languageCode: 'en',
  config: {},
  name: 'mock',
  app: {} as any,
  currentUser: null,
  onAuthStateChanged: () => () => {},
  beforeAuthStateChanged: () => () => {},
  onIdTokenChanged: () => () => {},
  updateCurrentUser: async () => {},
  signOut: async () => {},
  useDeviceLanguage: () => {},
  settings: {},
  tenantId: null
};

export default function MockFirebaseAuthProvider({ children }: React.PropsWithChildren) {
  return <AuthProvider sdk={mockAuth}>{children}</AuthProvider>;
}
