import React from 'react';
import { ReactNode } from 'react';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="home-layout">
      <h1>Start</h1>
      <main className="home-content">
        {children}
      </main>
      <h1>End</h1>
    </div>
  );
};

export default HomeLayout;
