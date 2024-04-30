import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 1897,
};

export const sampleWithPartialData: IJobHistory = {
  id: 27876,
  startDate: dayjs('2024-04-30T03:36'),
  language: 'FRENCH',
};

export const sampleWithFullData: IJobHistory = {
  id: 18386,
  startDate: dayjs('2024-04-30T04:46'),
  endDate: dayjs('2024-04-29T16:23'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
