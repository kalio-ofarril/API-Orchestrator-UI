'use client';

import React from 'react';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import { Theme } from '@carbon/react';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from '../../../lib/carbon-shell';

const APIOrchestratorHeader = () => {
  return (
    <Theme theme="g100">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <Header aria-label="Carbon Tutorial">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="/home" prefix="API">
              Orchestrator
            </HeaderName>
            <HeaderNavigation aria-label="Carbon Tutorial">
              <HeaderMenuItem href="/home/jobs">Schedulers</HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem href="/repos">Schedulers</HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Notifications">
                <Notification />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="User">
                <UserAvatar />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />
    </Theme>
  );
};

export default APIOrchestratorHeader;
