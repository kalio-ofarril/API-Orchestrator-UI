import { CircleFilled } from '@carbon/icons-react';
import { Column, Grid } from '@carbon/react';
import React, { useEffect } from 'react';

import styles from './JobLogCard.module.scss';

const JobLogCard = ({ data }) => {
  const statusColorClass =
    data.status == 'SUCCESS'
      ? styles['status-success']
      : styles['status-failed'];

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <Grid>
        <Column lg={1}>
          <CircleFilled
            className={`${styles['status-icon']} ${statusColorClass}`}
          />
        </Column>
        <Column lg={15}>
          <h5>Log {data.id}</h5>
        </Column>
        <Column lg={8} md={8}>
          <p>{data.status}</p>
        </Column>
        <Column lg={8} md={8}>
          <p>{data.responseCode}</p>
        </Column>
        <Column lg={16}>
          <p>{data.runTimestamp}</p>
        </Column>
        <Column lg={16}>
            <p>{data.errorMessage}</p>
        </Column>
      </Grid>
    </div>
  );
};

export default JobLogCard;
