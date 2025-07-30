import api from './axios';
import { Job } from '@/types/Job';

export const createJob = async (jobData): Promise<Job> => {
  const response = await api.post<Job>('/jobs',jobData);
  return response.data;
};

export const getJobLogs = async (jobData) => {
  const response = await api.get(`/jobs/${jobData.id}/logs`);
  return response.data;
};

export const triggerJob = async (jobData): Promise<Job> => {
  const response = await api.post<Job>(`/jobs/${jobData.id}/trigger`);
  return response.data;
};

export const deleteJob = async (jobData): Promise<Job> => {
  const response = await api.delete<Job>(`/jobs/${jobData.id}`);
  return response.data;
};