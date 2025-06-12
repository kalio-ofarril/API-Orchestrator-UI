import React from 'react';
import { ReactNode } from 'react';

import APIOrchestratorHeader from '../components/Header/APIOrchestratorHeader';

import styles from './home.module.scss';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="home-layout">
      <APIOrchestratorHeader />
      <main className={styles['home-content']}>
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
