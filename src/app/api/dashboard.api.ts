import { DashboardData } from '@/types/DashboardData';

export const getAllDashboardData = async (): Promise<DashboardData> => {
  return {
    jobs: [
      {
        id: 0,
        name: 'First Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://dummysite/url',
        cronExpression: '0 0/30 9-17 * * ?',
        group: 'dummysite jobs',
        isActive: true,
        lastRunSuccessful: true,
      },
      {
        id: 1,
        name: 'Second Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://fakesite/url',
        cronExpression: '0 0 12 * * ?',
        group: 'fakesite jobs',
        isActive: true,
        lastRunSuccessful: true,
      },
      {
        id: 2,
        name: 'Third Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://fakesite/url',
        cronExpression: '0 0 0 ? * 1#1',
        group: 'fakesite jobs',
        isActive: true,
        lastRunSuccessful: false,
      },
      {
        id: 3,
        name: 'Fourth Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://dummysite/url',
        cronExpression: '0 0 12 * * ?',
        group: 'dummysite jobs',
        isActive: false,
        lastRunSuccessful: true,
      },
      {
        id: 4,
        name: 'Fifth Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://dummysite/url',
        cronExpression: '0 0 12 * * ?',
        group: 'mocksite jobs',
        isActive: true,
        lastRunSuccessful: true,
      },
      {
        id: 5,
        name: 'Sixth Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://dummysite/url',
        cronExpression: '0 0 12 * * ?',
        group: 'mocksite jobs',
        isActive: false,
        lastRunSuccessful: false,
      },
      {
        id: 6,
        name: 'Seventh Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://dummysite/url',
        cronExpression: '0 0 12 * * ?',
        group: 'mocksite jobs',
        isActive: false,
        lastRunSuccessful: true,
      },
      {
        id: 7,
        name: 'Eight Job',
        owner: 'Kalio',
        description:
          'Short  Description on the job, what it does, extra info and who to contact for doubts',
        endpoint: 'https://dummysite/url',
        cronExpression: '0 0 12 * * ?',
        group: 'mocksite jobs',
        isActive: true,
        lastRunSuccessful: true,
      },
    ],
    groupColorMap: {
      'dummysite jobs': 'purple',
      'fakesite jobs': 'cyan',
      'mocksite jobs': 'green',
    },
  };
};
