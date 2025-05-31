import React from 'react';
import { ReactNode } from 'react';
import APIOrchestratorHeader from '../components/Header/APIOrchestratorHeader';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="home-layout">
      <APIOrchestratorHeader />
      <main className="home-content">
        {children}
      </main>
      <h1>End</h1>
    </div>
  );
};

export default HomeLayout;
