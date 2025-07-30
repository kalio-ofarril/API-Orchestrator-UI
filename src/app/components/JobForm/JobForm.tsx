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
import { useEffect, useState } from 'react';
import { Information } from '@carbon/icons-react';
import { createJob } from '@/app/api/job.api';
import { JobFormData } from '@/types/JobFormData';

interface JobFormProps {
  onClose: () => void;
  refreshDashboard: () => void;
  jobPanelData: JobFormData;
  mode: String;
}

const JobForm: React.FC<JobFormProps> = ({
  onClose,
  refreshDashboard,
  jobPanelData,
  mode,
}) => {
  const [validForm, setValidForm] = useState(false);
  const [jobFormData, setJobFormData] = useState<JobFormData>(jobPanelData);

  useEffect(() => {
    setJobFormData(jobPanelData);
  }, [jobPanelData]);

  useEffect(() => {
    setValidForm(validateForm(jobFormData));
  }, [jobFormData]);

  const getCronDescription = (expression: string): string => {
    try {
      return cronstrue.toString(expression);
    } catch {
      return 'Invalid cron expression';
    }
  };

  const validateForm = (data: JobFormData): boolean => {
    console.log('in validate');
    return (
      data.name.trim() !== '' &&
      data.groupTag.trim() !== '' &&
      data.description.trim() !== '' &&
      data.endpoint.trim() !== '' &&
      data.cronExpression.trim() !== '' &&
      getCronDescription(data.cronExpression) !== 'Invalid cron expression'
    );
  };

  const resetForm = () => {
    setJobFormData({
      name: '',
      groupTag: '',
      description: '',
      endpoint: '',
      cronExpression: '',
      owner: '',
      active: true,
    });
  };

  const handleChange = (key: keyof JobFormData, value: string | boolean) => {
    setJobFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createJob(jobFormData);
      refreshDashboard();
      onClose();
      resetForm();
    } catch (err) {
      console.error('Failed to create job', err);
    }
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
                <TextInput
                  id="jobName"
                  labelText="Job Name"
                  value={jobFormData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  disabled={mode == 'View'}
                />

                <Toggle
                  id="isActive"
                  toggled={jobFormData.active}
                  labelA="Off"
                  labelB="On"
                  labelText="Active"
                  onToggle={(toggled) => handleChange('active', toggled)}
                  className={styles['job-form-active-toggle']}
                  disabled={mode == 'View'}
                />
              </div>

              <TextInput
                id="group"
                labelText="Group"
                value={jobFormData.groupTag}
                onChange={(e) => handleChange('groupTag', e.target.value)}
                disabled={mode == 'View'}
              />

              <TextArea
                id="description"
                labelText="Description"
                value={jobFormData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                disabled={mode == 'View'}
              />

              <TextInput
                id="endpoint"
                labelText="Target API Endpoint"
                value={jobFormData.endpoint}
                onChange={(e) => handleChange('endpoint', e.target.value)}
                disabled={mode == 'View'}
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
                value={jobFormData.cronExpression}
                onChange={(e) => handleChange('cronExpression', e.target.value)}
                placeholder="e.g. 0 0 12 * * ?"
                helperText={getCronDescription(jobFormData.cronExpression)}
                labelText={''}
                className={styles['job-form-cron-input']}
                disabled={mode == 'View'}
              />

              <div className={styles['form-footer']}>
                <Button
                  kind="secondary"
                  className={styles['job-form-button']}
                  onClick={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  className={styles['job-form-button']}
                  disabled={!validForm}>
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
