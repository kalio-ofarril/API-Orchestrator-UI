'use client';

import React, { useEffect, useState } from 'react';

import { ContainedList, ContainedListItem } from '../../lib/carbon-shell';
import DashboardJobCard from '../components/DashboardJobCard/DashboardJobCard';

import { getAllDashboardData } from '../api/dashboard.api';
import { DashboardData } from '@/types/DashboardData';

import styles from './home.module.scss';
import { Button, Column, Grid, ToastNotification } from '@carbon/react';
import { Add } from '@carbon/icons-react';
import DashboardSummary from '../components/DashboardSummary/DashboardSummay';
import JobPanel from '../components/JobPanel/JobPanel';
import JobLogsModal from '../components/JobLogsModal/JobLogsModal';

const HomePage = () => {
  const [isJobPanelOpen, setJobPanelOpen] = useState(false);
  const [jobLogsModalOpen, setJobLogsModalOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [jobPanelMode, setJobPanelMode] = useState('');
  const [jobPanelData, setJobPanelData] = useState({});
  const [jobLogData, setJobLogData] = useState({});
  const [allDashoardData, setAllDashboardData] = useState<DashboardData>({
    jobs: [],
    groupColorMap: {},
  });

  useEffect(() => {
    refreshDashboard();
  }, []);

  const refreshDashboard = () => {
    getAllDashboardData().then(setAllDashboardData);
  };

  const toggleJobPanel = (data, mode) => {
    setJobPanelMode(mode);
    setJobPanelData(data);
    setJobPanelOpen(!isJobPanelOpen);
  };

  const handleModalOpen = (data) => {
    console.log(data);
    setJobLogData(data);
    setJobLogsModalOpen(!jobLogsModalOpen);
  };

  const handleSuccessJobTrigger = () => {
    setShowSuccessToast(true);
  };

  return (
    <>
      {showSuccessToast && (
        <ToastNotification
          className={styles['job-manual-toast']}
          title="Job triggered"
          subtitle="The job was successfully triggered."
          kind="success"
          onCloseButtonClick={() => setShowSuccessToast(false)}
        />
      )}

      <JobLogsModal
        open={jobLogsModalOpen}
        data={jobLogData}
        handleModalOpen={handleModalOpen}
      />

      {isJobPanelOpen && (
        <JobPanel
          mode={jobPanelMode}
          onClose={() => setJobPanelOpen(false)}
          isVisible={isJobPanelOpen}
          refreshDashboard={refreshDashboard}
          jobPanelData={jobPanelData}
        />
      )}

      <Grid className={styles['dashboard-header']}>
        <Column lg={12}>
          <h2 className={styles['dashboard-title']}>Job Control Panel</h2>
          <p className={styles['dashboard-subtitle']}>
            Monitor status and manage execution of your team’s API jobs.
          </p>
        </Column>
      </Grid>

      <DashboardSummary
        total={allDashoardData.jobs.length}
        active={allDashoardData.jobs.filter((o) => o.active).length}
        failed={allDashoardData.jobs.filter((o) => !o.lastRunSuccessful).length}
        inactive={allDashoardData.jobs.filter((o) => !o.active).length}
      />

      {/* <Search
        placeholder="Filter"
        // value={searchTerm}
        // onChange={handleChange}
        closeButtonLabelText="Clear search input"
        size="lg"
        labelText="Filter search"
      /> */}
      <ContainedList
        className={styles['job-list-container']}
        kind="on-page"
        label="Scheduled Jobs"
        size="lg"
        action={
          <Button
            iconDescription="Add"
            renderIcon={Add}
            tooltipPosition="left"
            onClick={() =>
              toggleJobPanel(
                {
                  name: '',
                  groupTag: '',
                  description: '',
                  endpoint: '',
                  cronExpression: '',
                  owner: '',
                  active: true,
                },
                'Create'
              )
            }>
            Create Job
          </Button>
        }>
        {allDashoardData.jobs.map((job) => (
          <ContainedListItem key={job.id}>
            <DashboardJobCard
              data={job}
              groupColor={allDashoardData.groupColorMap[job.groupTag]}
              toggleJobPanel={toggleJobPanel}
              refreshDashboard={refreshDashboard}
              handleModalOpen={handleModalOpen}
              handleSuccessJobTrigger={handleSuccessJobTrigger}
            />
          </ContainedListItem>
        ))}
      </ContainedList>
    </>
  );
};

export default HomePage;
