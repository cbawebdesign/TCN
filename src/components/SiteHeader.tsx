import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useUserSession } from '~/core/hooks/use-user-session';
import dynamic from 'next/dynamic';
import Logo from '~/core/ui/Logo';
import Container from '~/core/ui/Container';
import If from '~/core/ui/If';
import Button from '~/core/ui/Button';
import SiteNavigation from './SiteNavigation';
import ProfileDropdown from './ProfileDropdown';
import configuration from '~/configuration';

const DarkModeToggle = dynamic(() => import('~/components/DarkModeToggle'), {
  ssr: false,
});

const fixedClassName = `FixedHeader`;

function AuthButtons() {
  return (
    <div className={'hidden space-x-2 lg:flex'}>
      <Button round variant={'ghost'} href={configuration.paths.signIn}>
        <span>Sign In</span>
      </Button>

      <Button round href={configuration.paths.signUp}>
        <span className={'flex items-center space-x-2'}>
          <span>Sign Up</span>
          <ChevronRightIcon className={'h-4'} />
        </span>
      </Button>
    </div>
  );
}

const HeaderContent = dynamic(() => Promise.resolve(({ fixed }: { fixed?: boolean }) => {
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
}), { ssr: false });

const SiteHeader: React.FC<{ fixed?: boolean }> = (props) => {
  return <HeaderContent {...props} />;
};

export default SiteHeader;
