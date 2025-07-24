import { DashboardData } from '@/types/DashboardData';
import api from './axios';

export const getAllDashboardData = async (): Promise<DashboardData> => {
  const response = await api.get<DashboardData>('/dashboard');
  return response.data;
};
