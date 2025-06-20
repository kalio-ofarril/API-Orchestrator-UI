import {
  Button,
  Column,
  Form,
  Grid,
  Stack,
  TextArea,
  TextInput,
  Toggle,
} from '@carbon/react';

import styles from './JobForm.module.scss';
import cronstrue from 'cronstrue';
import { useRef, useState } from 'react';
import { Information } from '@carbon/icons-react';

const JobForm = ({ onClose }) => {
  const jobNameRef = useRef<HTMLInputElement>(null);
  const groupRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const endpointRef = useRef<HTMLInputElement>(null);
  const [cronExpression, setCronExpression] = useState('');
  const [isActive, setIsActive] = useState(true);

  const getCronDescription = (expression: string): string => {
    try {
      return cronstrue.toString(expression);
    } catch {
      return 'Invalid cron expression';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default browser reload

    const jobPayload = {
      name: jobNameRef.current?.value,
      group: groupRef.current?.value,
      description: descriptionRef.current?.value,
      endpoint: endpointRef.current?.value,
      cronExpression,
      isActive,
    };

    console.log('Submitting job:', jobPayload);

    // 🔁 TODO: Send this payload to backend via fetch or Axios
  };

  return (
    <>
      <Grid className={styles['form-grid']}>
        <Column lg={16}>
          <Form
            aria-label="Job creation form"
            onSubmit={handleSubmit}
            className={styles['job-form']}>
            <Stack gap={2} className={styles['job-form']}>
              <div className={styles['job-form-name-row']}>
                <TextInput id="jobName" labelText="Job Name" ref={jobNameRef} />

                <Toggle
                  id="isActive"
                  defaultToggled
                  labelA="Off"
                  labelB="On"
                  labelText="Active"
                  onToggle={() => setIsActive((prev) => !prev)}
                  className={styles['job-form-active-toggle']}
                />
              </div>

              <TextInput id="group" labelText="Group" ref={groupRef} />

              <TextArea
                id="description"
                labelText="Description"
                ref={descriptionRef}
              />

              <TextInput
                id="endpoint"
                labelText="Target API Endpoint"
                ref={endpointRef}
              />

              <div className={styles['cron-label-container']}>
                <label htmlFor="cron" className="cds--label">
                  Schedule (Cron Expression)
                </label>
                <a
                  href="https://crontab.guru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['cron-help-icon']}
                  aria-label="Cron expression help"
                  title="Open cron expression help">
                  <Information />
                </a>
              </div>

              <TextInput
                id="cron"
                value={cronExpression}
                onChange={(e) => setCronExpression(e.target.value)}
                placeholder="e.g. 0 0 12 * * ?"
                helperText={getCronDescription(cronExpression)}
                labelText={''}
                className={styles['job-form-cron-input']}
              />

              <div className={styles['form-footer']}>
                <Button
                  kind="secondary"
                  className={styles['job-form-button']}
                  onClick={onClose}>
                  Close
                </Button>
                <Button type="submit" className={styles['job-form-button']}>
                  Submit
                </Button>
              </div>
            </Stack>
          </Form>
        </Column>
      </Grid>
    </>
  );
};

export default JobForm;
