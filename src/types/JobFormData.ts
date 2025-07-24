
export interface JobFormData {
  id?: number;
  name: string;
  groupTag: string;
  description: string;
  endpoint: string;
  cronExpression: string;
  owner: string;
  active: boolean;
}
