'use client';

import './globals.scss';

import React from 'react';
import { FC, ReactNode } from 'react';
import { Theme } from '@carbon/react';
import ThemeWrapper from './components/layout/ThemeWrapper';

// export const metadata = {
//   title: 'Carbon + Next13',
//   description: 'IBM Carbon Tutorial with NextJS 13',
// };

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
