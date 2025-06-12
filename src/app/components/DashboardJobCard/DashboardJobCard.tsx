'use client';

import { Column, Grid, Tooltip } from '@carbon/react';
import React from 'react';

import cronstrue from 'cronstrue';

import styles from './DashboardJobCard.module.scss';
import { Tag } from '@/lib/carbon-shell';
import {
  Catalog,
  DiamondFill,
  Edit,
  TrashCan,
  View,
  WarningFilled,
  WatsonHealthRotate_360,
} from '@carbon/icons-react';

const DashboardJobCard = ({ data, groupColor }) => {
  const readableSchedule = cronstrue.toString(data.cronExpression);

  const statusColorClass = data.isActive
    ? styles['status-active']
    : styles['status-inactive'];

  return (
    <div>
      <Grid className={styles['dashboard-job-card']} fullWidth>
        <Column lg={3} md={8} sm={5} className={styles['job-card-column']}>
          <Column lg={16}>
            <span className={styles['job-card-header']}>
              <h3>{data.name}</h3>
              {!data.lastRunSuccessful && (
                <Tooltip label="Last run failed" align="right">
                  <button
                    type="button"
                    tabIndex={0}
                    className={styles['dashboard-job-card-icon-button']}
                    aria-label="Last run failed">
                    <WarningFilled
                      size={24}
                      className={styles['dashboard-job-card-icon']}
                      style={{ fill: '#FA4D56' }} // matte red
                    />
                  </button>
                </Tooltip>
              )}
            </span>
          </Column>
          <Column lg={16}>
            <h5>{data.owner}</h5>
          </Column>
          <Column lg={16}>
            <h6>
              <DiamondFill
                className={`${styles['status-icon']} ${statusColorClass}`}
              />
              {data.isActive ? 'Active' : 'Inactive'}
            </h6>
          </Column>
        </Column>
        <Column lg={9} md={8} sm={5} className={styles['job-card-column']}>
          <Column lg={16}>
            <h6>{data.description}</h6>
          </Column>
          <Column lg={16}>
            <h6>{data.endpoint}</h6>
          </Column>
          <Column lg={16}>
            <h6>{readableSchedule}</h6>
          </Column>
        </Column>
        <Column lg={4} md={8} sm={5} className={styles['job-card-column']}>
          <Column lg={16}>
            <Tag
              className="some-class"
              size="md"
              title="Clear filter"
              type={groupColor}>
              {data.group}
            </Tag>
          </Column>
          <Column lg={16}>
            <Tooltip label="Logs" leaveDelayMs={0}>
              <button
                type="button"
                tabIndex={0}
                className={styles['dashboard-job-card-icon-button']}
                aria-label="Logs">
                <Catalog
                  size={24}
                  className={styles['dashboard-job-card-icon']}
                />
              </button>
            </Tooltip>
            <Tooltip label="Trigger" leaveDelayMs={0}>
              <button
                type="button"
                tabIndex={0}
                className={styles['dashboard-job-card-icon-button']}
                aria-label="Trigger">
                <WatsonHealthRotate_360
                  size={24}
                  className={styles['dashboard-job-card-icon']}
                />
              </button>
            </Tooltip>
            <Tooltip label="View" leaveDelayMs={0}>
              <button
                type="button"
                tabIndex={0}
                className={styles['dashboard-job-card-icon-button']}
                aria-label="View">
                <View size={24} className={styles['dashboard-job-card-icon']} />
              </button>
            </Tooltip>
            <Tooltip label="Edit" leaveDelayMs={0}>
              <button
                type="button"
                tabIndex={0}
                className={styles['dashboard-job-card-icon-button']}
                aria-label="Edit">
                <Edit size={24} className={styles['dashboard-job-card-icon']} />
              </button>
            </Tooltip>
            <Tooltip label="Delete" leaveDelayMs={0}>
              <button
                type="button"
                tabIndex={0}
                className={styles['dashboard-job-card-icon-button']}
                aria-label="Delete">
                <TrashCan
                  size={24}
                  className={styles['dashboard-job-card-icon']}
                />
              </button>
            </Tooltip>
          </Column>
        </Column>
      </Grid>
    </div>
  );
};

export default DashboardJobCard;
