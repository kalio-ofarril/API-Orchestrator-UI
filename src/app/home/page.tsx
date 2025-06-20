'use client';

import React, { useEffect, useState } from 'react';

import { ContainedList, ContainedListItem } from '../../lib/carbon-shell';
import DashboardJobCard from '../components/DashboardJobCard/DashboardJobCard';

import { getAllDashboardData } from '../api/dashboard.api';
import { DashboardData } from '@/types/DashboardData';

import styles from './home.module.scss';
import { Button, Column, Grid, Search, Tile } from '@carbon/react';
import { Add } from '@carbon/icons-react';
import DashboardSummary from '../components/DashboardSummary/DashboardSummay';
import JobPanel from '../components/JobPanel/JobPanel';

const HomePage = () => {
  const [isJobPanelOpen, setJobPanelOpen] = useState(false);
  const [allDashoardData, setAllDashboardData] = useState<DashboardData>({
    jobs: [],
    groupColorMap: {},
  });

  useEffect(() => {
    getAllDashboardData().then(setAllDashboardData);
  }, []);

  return (
    <>
      {isJobPanelOpen && (
        <JobPanel
          mode={'Create'}
          onClose={() => setJobPanelOpen(false)}
          isVisible={isJobPanelOpen}
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
        active={allDashoardData.jobs.filter((o) => o.isActive).length}
        failed={allDashoardData.jobs.filter((o) => !o.lastRunSuccessful).length}
        inactive={allDashoardData.jobs.filter((o) => !o.isActive).length}
      />

      <Search
        placeholder="Filter"
        // value={searchTerm}
        // onChange={handleChange}
        closeButtonLabelText="Clear search input"
        size="lg"
        labelText="Filter search"
      />
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
            onClick={() => setJobPanelOpen(!isJobPanelOpen)}>
            Create Job
          </Button>
        }>
        {allDashoardData.jobs.map((job) => (
          <ContainedListItem key={job.id}>
            <DashboardJobCard
              data={job}
              groupColor={allDashoardData.groupColorMap[job.group]}
            />
          </ContainedListItem>
        ))}
      </ContainedList>
    </>
  );
};

export default HomePage;
