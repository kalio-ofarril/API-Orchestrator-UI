import React from 'react';

import styles from './JobPanel.module.scss';
import { Column, Grid } from '@carbon/react';
import JobForm from '../JobForm/JobForm';

const JobPanel = ({ mode, isVisible, onClose }) => {
  return (
    <div
      className={`${styles['job-panel']} styles['job-panel'] ${
        isVisible ? styles['visible'] : styles['hidden']
      }`}>
      <h1 className={styles['job-panel-title']}>Job {mode} Panel</h1>

      <Column lg={16} className={styles['job-panel-form-column']}>
        <JobForm onClose={onClose}/>
      </Column>
    </div>
  );
};

export default JobPanel;
