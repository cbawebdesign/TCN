import React, { Dispatch, useCallback, useEffect, useRef, lazy, Suspense } from 'react';
import { AuthProvider, useAuth, useFirebaseApp } from 'reactfire';
import { i18n } from 'next-i18next';

import {
  initializeAuth,
  indexedDBLocalPersistence,
  connectAuthEmulator,
  User,
} from 'firebase/auth';

import { isBrowser } from '~/core/generic/is-browser';
import { useDestroySession } from '~/core/hooks/use-destroy-session';
import { UserSession } from '~/core/session/types/user-session';

export const FirebaseAuthStateListener: React.FCC<{
  onAuthStateChange: (user: User | null) => void | Promise<void>;
}> = ({ children, onAuthStateChange }) => {
  const auth = useAuth();

  // {@link onIdTokenChanged} will call the
  // callback when the user ID token changes
  // for example, when the user signs out
  // we update user context when ID token changes
  useEffect(() => {
    const subscription = auth.onIdTokenChanged(onAuthStateChange);

    return () => subscription();
  }, [auth, onAuthStateChange]);

  return <>{children}</>;
};

const MockProvider = lazy(() => import('./MockFirebaseAuthProvider'));

export default function FirebaseAuthProvider({
  userSession,
  setUserSession,
  children,
  useEmulator,
}: React.PropsWithChildren<{
  useEmulator: boolean;
  userSession: Maybe<UserSession>;
  setUserSession: Dispatch<Maybe<UserSession>>;
}>) {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MockProvider>{children}</MockProvider>
      </Suspense>
    );
  }

  const app = useFirebaseApp();
  const { trigger: signOut } = useDestroySession();
  const userRef = useRef<Maybe<User>>(null);

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = isBrowser() ? indexedDBLocalPersistence : undefined;

  const sdk = initializeAuth(app, { persistence });
  const shouldConnectEmulator = useEmulator && !('emulator' in sdk.config);

  // set the language code for the SDK
  if (i18n?.language) {
    sdk.languageCode = i18n?.language;
  }

  if (shouldConnectEmulator) {
    const host = getAuthEmulatorHost();

    connectAuthEmulator(sdk, host);
  }

  const onAuthStateChanged = useCallback(
    async (user: User | null) => {
      if (user) {
        const session = {
          auth: user,
          data: userSession?.data,
        };

        userRef.current = user;

        return setUserSession(session);
      }

      // if the user is no longer defined and user was originally signed-in
      // (because userSession?.auth is defined) then we need to clear the
      // session cookie
      if (userRef.current) {
        try {
          // we need to delete the session cookie used for SSR
          await signOut();
        } finally {
          setUserSession(undefined);
          userRef.current = undefined;
        }
      }
    },
    [setUserSession, signOut, userSession?.data],
  );

  return (
    <AuthProvider sdk={sdk}>
      <FirebaseAuthStateListener onAuthStateChange={onAuthStateChanged}>
        {children}
      </FirebaseAuthStateListener>
    </AuthProvider>
  );
}

function getAuthEmulatorHost() {
  const host = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
  const port = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT;

  return ['http://', host, ':', port].join('');
}
