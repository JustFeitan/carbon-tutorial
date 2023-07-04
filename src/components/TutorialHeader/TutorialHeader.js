import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from '@carbon/react';
import { Notification, Switcher, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const TutorialHeader = () => {
  const [sideNavState, setSidenavState] = useState(false);

  const toggleSideNav = () => {
    setSidenavState(prevState => !prevState);
  };

  return (
    <HeaderContainer
      render={() => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={toggleSideNav}
            isActive={sideNavState}
          />
          <HeaderName element={Link} to="/" prefix="IBM">
            Carbon Tutorial
          </HeaderName>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem element={Link} to="/repos">
              Repositories
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={sideNavState}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem
                  element={Link}
                  to="/repos"
                  onClick={toggleSideNav}>
                  Repositories
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
            {/*Block for close sidebar on overlay click*/}
            <div
              className={sideNavState ? `overlay-for-close` : ''}
              onClick={toggleSideNav}
            />
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center">
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end">
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default TutorialHeader;
