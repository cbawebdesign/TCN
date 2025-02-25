import { getApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Mock config for development mode
const mockConfig = {
  apiKey: 'mock-api-key',
  authDomain: 'mock-auth-domain',
  projectId: 'mock-project-id',
  storageBucket: 'mock-storage-bucket',
  messagingSenderId: 'mock-sender-id',
  appId: 'mock-app-id'
};

let firebaseApp: any = null;

/**
 * Initialize Firebase app as a singleton
 * Returns null for SSR, existing app instance if already initialized,
 * or creates a new instance
 */
export function initializeFirebase() {
  // Return null for SSR
  if (typeof window === 'undefined') {
    return null;
  }

  // Return existing instance if already initialized
  if (firebaseApp) {
    return firebaseApp;
  }

  try {
    // Try to get existing app
    firebaseApp = getApp();
    return firebaseApp;
  } catch {
    // Initialize new app with appropriate config
    const config = process.env.NODE_ENV === 'development' 
      ? mockConfig 
      : (window as any).__FIREBASE_CONFIG__;

    firebaseApp = initializeApp(config);

    // Initialize Analytics in browser environment
    if (process.env.NODE_ENV === 'production') {
      getAnalytics(firebaseApp);
    }

    return firebaseApp;
  }
}
