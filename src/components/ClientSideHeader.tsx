import React from 'react';
import { useUserSession } from '~/core/hooks/use-user-session';
import Logo from '~/core/ui/Logo';
import Container from '~/core/ui/Container';
import If from '~/core/ui/If';
import DarkModeToggle from '~/components/DarkModeToggle';
import SiteNavigation from './SiteNavigation';
import ProfileDropdown from './ProfileDropdown';
import configuration from '~/configuration';
import AuthButtons from './AuthButtons';

const fixedClassName = `FixedHeader`;

const ClientSideHeader: React.FC<{ fixed?: boolean }> = ({ fixed }) => {
  const userSession = useUserSession();
  const signOutRequested = () => {
    window.location.href = '/auth/sign-out';
  };

  return (
    <div className={`w-full ${fixed ? fixedClassName : ''}`}>
      <Container>
        <div className="flex py-1.5 px-1 items-center border-b border-gray-50 dark:border-dark-800/50 justify-between">
          <div className={'w-4/12'}>
            <Logo />
          </div>

          <div className={'w-4/12 hidden lg:flex justify-center'}>
            <SiteNavigation />
          </div>

          <div className={'flex items-center space-x-4 w-4/12 justify-end'}>
            <If condition={configuration.features.enableThemeSwitcher}>
              <div>
                <DarkModeToggle />
              </div>
            </If>

            <If condition={userSession?.auth} fallback={<AuthButtons />}>
              {(user) => (
                <ProfileDropdown
                  displayName={false}
                  user={user}
                  signOutRequested={signOutRequested}
                />
              )}
            </If>

            <div className={'flex lg:hidden'}>
              <SiteNavigation />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientSideHeader;
