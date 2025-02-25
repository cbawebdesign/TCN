import * as admin from 'firebase-admin';
import configuration from '~/configuration';

let app: admin.app.App | null = null;

export function initializeAdminApp() {
  if (app) {
    return app;
  }

  const projectId = configuration.firebase.projectId;
  const clientEmail = process.env.SERVICE_ACCOUNT_CLIENT_EMAIL;
  const privateKey = process.env.SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    console.warn('Firebase Admin credentials not found. Some server-side features may not work.');
    return null;
  }

  try {
    app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      projectId,
    });
    return app;
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error);
    return null;
  }
}
