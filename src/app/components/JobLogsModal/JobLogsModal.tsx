import React, { useEffect, useState } from 'react';
import {
  Modal,
  Button,
  TextInput,
  ContainedList,
  ContainedListItem,
} from '@carbon/react';
import { getJobLogs } from '@/app/api/job.api';
import JobLogCard from '../JobLogCard/JobLogCard';

import styles from './JobLogsModal.module.scss';

const JobLogsModal = ({ open, data, handleModalOpen }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    console.log(data);
    console.log(data.id);
    getJobLogs(data).then(setLogs);
  }, [data]);

  return (
    <>
      <Modal
        open={open}
        modalHeading={`${data.name} History Logs`}
        primaryButtonText="Close"
        onRequestClose={() => handleModalOpen(false)}
        onRequestSubmit={() => handleModalOpen(false)}
        passiveModal>
        {logs.length > 0 ? (
          <ContainedList
            className={styles['job-list-container']}
            kind="on-page"
            label="Last 10 logs:"
            size="lg">
            {logs.map((log) => (
              <ContainedListItem key={log.id}>
                <JobLogCard data={log} />
              </ContainedListItem>
            ))}
          </ContainedList>
        ) : (
          <p>No logs found.</p>
        )}
      </Modal>
    </>
  );
};

export default JobLogsModal;
