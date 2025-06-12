export interface Job {
  id: number;
  name: string;
  owner: string;
  description: string;
  endpoint: string;
  cronExpression: string;
  group: string;
  isActive: boolean;
  lastRunSuccessful: boolean;
}
