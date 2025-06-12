'use client';

import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';
import styles from './DashboardSummary.module.scss';

const DashboardSummary = ({ total, active, failed, inactive }) => (
  <>
    <Tile className={styles['dashboard-summary']}>
      <Grid className={styles['dashboard-summary-grid']} condensed>
        <Column lg={2}>Total: {total}</Column>
        <Column lg={2}>Active: {active}</Column>
        <Column lg={2}>Failed: {failed}</Column>
        <Column lg={2}>Inactive: {inactive}</Column>
        <Column lg={8}></Column>
      </Grid>
    </Tile>
    <div className={styles['section-divider']} />
  </>
);

export default DashboardSummary;
