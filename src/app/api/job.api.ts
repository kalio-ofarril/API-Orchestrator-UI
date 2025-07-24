import api from './axios';
import { Job } from '@/types/Job';

export const createJob = async (jobData): Promise<Job> => {
  const response = await api.post<Job>('/jobs',jobData);
  return response.data;
};
