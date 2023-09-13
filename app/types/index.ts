export type ClassData = {
  timeCategory: string;
  instructor: string;
  locationSchedule: string;
  className: string;
  timeSchedule: string;
  classDuration: number;
  classType: string;
  classDifficulty: string;
  backgroundImage: string;
  imageDetail: string;
};

export type ScheduleData = {
  [data: string]: ClassData[];
};

export type FormattedScheduleData = {
  id: DatesData['id'];
  morning: ClassData[];
  evening: ClassData[];
};

export type DatesData = {
  id: string;
  day: string;
  date: number;
  month: string;
  year: number;
};
