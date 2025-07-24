import React from 'react';

import styles from './JobPanel.module.scss';
import { Column, Grid } from '@carbon/react';
import JobForm from '../JobForm/JobForm';

const JobPanel = ({ mode, isVisible, onClose, refreshDashboard, jobPanelData }) => {

  console.log('JobPanel class:', isVisible ? 'visible' : 'hidden');

  return (
    <div
      className={`${styles['job-panel']} ${
        isVisible ? styles['visible'] : styles['hidden']
      }`}>
      <h1 className={styles['job-panel-title']}>Job {mode} Panel</h1>

      <Column lg={16} className={styles['job-panel-form-column']}>
        <JobForm onClose={onClose} refreshDashboard={refreshDashboard} jobPanelData={jobPanelData} mode={mode}/>
      </Column>
    </div>
  );
};

export default JobPanel;
