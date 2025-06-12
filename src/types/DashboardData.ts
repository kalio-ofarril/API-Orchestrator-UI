import { Job } from "./Job";

export interface DashboardData {
    jobs: Job[],
    groupColorMap: Record<string, string>
}