import { GetServerSidePropsContext } from 'next';
import { setCookie } from 'nookies';

import { initializeFirebaseAdminApp } from '~/core/firebase/admin/initialize-firebase-admin-app';
import { getOrganizationById } from '~/lib/server/queries';
import { getLoggedInUser } from '~/core/firebase/admin/auth/get-logged-in-user';

function OrganizationSplatRoute() {
  return <></>;
}

export default OrganizationSplatRoute;

/**
 * Redirects to the path with the organization id in the cookie
 * Useful to change organization or deep-link to a specific organization
 *
 * /1/dashboard will redirect to /dashboard with the organization id in the cookie
 * /4/settings/organization will redirect to /settings/organization with the organization id in the cookie
 */
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const routes = ctx.params?.organization as string[];
  const organizationId = routes[0];
  const path = ['', ...routes.slice(1)].join('/');

  if (organizationId) {
    if (process.env.NODE_ENV !== 'development') {
      await initializeFirebaseAdminApp();
    }

    // In development mode, mock the user
    const user = process.env.NODE_ENV === 'development' 
      ? { uid: 'mock-user-id' }
      : await getLoggedInUser(ctx).catch(() => undefined);

    // if the user is not logged in, redirect to /404
    if (!user) {
      return notFound();
    }

    // In development mode, mock the organization data
    const organization = process.env.NODE_ENV === 'development'
      ? { exists: true, data: () => ({ members: { 'mock-user-id': true } }) }
      : await getOrganizationById(organizationId);

    // if the organization exists, we can continue
    if (organization.exists) {
      const isUserMember = process.env.NODE_ENV === 'development' ? true : (organization.data()?.members as Record<string, any>)?.[user.uid];

      // if the user is not an organization member, redirect to /404
      if (!isUserMember) {
        return notFound();
      }

      setCookie(ctx, 'organizationId', organizationId, {
        path: '/',
        httpOnly: true,
      });

      return {
        redirect: {
          destination: path,
        },
      };
    }
  }

  // in all other cases, redirect to /404
  return notFound();
}

function notFound() {
  return {
    notFound: true,
  };
}
