export interface ClassData {
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
}

export interface ScheduleData {
  [data: string]: ClassData[];
}
