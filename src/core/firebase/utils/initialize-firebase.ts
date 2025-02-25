import { getApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

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
    // Initialize new app with config from window
    const config = (window as any).__FIREBASE_CONFIG__;

    if (!config) {
      throw new Error('Firebase configuration not found. Please ensure environment variables are set correctly.');
    }

    firebaseApp = initializeApp(config);

    // Initialize Analytics in browser environment
    if (typeof window !== 'undefined') {
      getAnalytics(firebaseApp);
    }
  }

  return firebaseApp;
}
