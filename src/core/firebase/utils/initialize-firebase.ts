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
  // Return existing instance if already initialized
  if (firebaseApp) {
    return firebaseApp;
  }

  // Handle SSR case
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    // Try to get existing app
    firebaseApp = getApp();
  } catch {
    // Initialize new app with appropriate config
    const config = process.env.NODE_ENV === 'development' 
      ? mockConfig 
      : (window as any).__FIREBASE_CONFIG__;

    if (!config) {
      console.warn('Firebase config not found. Using mock config for development.');
    }

    firebaseApp = initializeApp(config || mockConfig);

    // Initialize Analytics only in production browser environment
    if (process.env.NODE_ENV === 'production') {
      getAnalytics(firebaseApp);
    }
  }

  return firebaseApp;
}
