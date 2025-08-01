'use client';

import './globals.scss';

import React from 'react';
import { FC, ReactNode } from 'react';
import { Theme } from '@carbon/react';
import ThemeWrapper from './components/layout/ThemeWrapper';
import APIOrchestratorHeader from './components/Header/APIOrchestratorHeader';

import styles from './home.module.scss';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <div className="home-layout">
            <APIOrchestratorHeader />
            <main className={styles['home-content']}>{children}</main>
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
