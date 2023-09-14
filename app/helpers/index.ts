import { ClassData, ScheduleData } from '@/types';

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getNextWeekDate = (baseDate: Date) => {
  const nextWeek = new Date(baseDate);
  nextWeek.setDate(baseDate.getDate() + 7);

  // Check if the next week's date is in the same month
  if (nextWeek.getMonth() !== baseDate.getMonth()) {
    // If not, adjust the month and year accordingly
    nextWeek.setMonth(baseDate.getMonth());
    nextWeek.setFullYear(baseDate.getFullYear());
  }

  return formatDate(nextWeek);
};

export const formatClasses = (classesData: ScheduleData) => {
  const dates = Object.keys(classesData);

  // Create an array of objects in the desired format
  return dates.map((date) => {
    const classes = classesData[date];

    // Initialize objects to store morning and evening classes
    const morningClasses: ClassData[] = [];
    const eveningClasses: ClassData[] = [];

    // Loop through the classes and categorize them
    classes.forEach((cls) => {
      if (cls.timeCategory === 'morning') {
        morningClasses.push(cls);
      } else if (cls.timeCategory === 'evening') {
        eveningClasses.push(cls);
      }
    });

    // Sort morning and evening classes by timeSchedule
    // eslint-disable-next-line max-len
    const sortClasses = (unsortedClasses: ClassData[]) => unsortedClasses.sort((a, b) => a.timeSchedule.localeCompare(b.timeSchedule));

    return {
      id: date,
      morning: sortClasses(morningClasses),
      evening: sortClasses(eveningClasses),
    };
  });
};

export const formatDates = (startDateStr: string, endDateStr: string) => {
  // Initialize an empty array to store the formatted dates
  const formattedDates = [];

  // Convert the start date and end date strings to JavaScript Date objects in UTC timezone
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Get the day of the week in "Monday" format
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Loop through the date range and format each date
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const formattedDay = daysOfWeek[
      currentDate.getUTCDay() // Use getUTCDay() to ensure UTC timezone
    ];
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getUTCDate()).padStart(2, '0');

    formattedDates.push({
      id: `${year}${month}${day}`,
      day: formattedDay,
      date: currentDate.getUTCDate(),
      month: currentDate.toLocaleString('en-US', { month: 'long' }),
      year,
    });

    // Move to the next day
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return formattedDates;
};

export const capitalizeFirstThreeLetters = (string: string) => string.slice(0, 3).toUpperCase();

// eslint-disable-next-line max-len
const isLeapYear = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

export const getWeekStartEnd = (dateStr: string): [string, string] => {
  // Parse the input date string
  const date = new Date(dateStr);

  // Calculate the weekday (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const weekday = date.getDay();

  // Calculate the starting date of the week (Monday)
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - weekday + (weekday === 0 ? -6 : 1));

  // Calculate the ending date of the week (Sunday)
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  // Check if the ending date of the week is in a different month
  if (startOfWeek.getMonth() !== endOfWeek.getMonth()) {
    if (startOfWeek.getMonth() < endOfWeek.getMonth()) {
      // Start date is in the previous month
      startOfWeek.setMonth(startOfWeek.getMonth() - 1);
    } else {
      // End date is in the next month
      endOfWeek.setMonth(endOfWeek.getMonth() + 1);
    }
  }

  // Check for leap year and adjust the ending date if necessary
  if (isLeapYear(startOfWeek.getFullYear()) && startOfWeek.getMonth() === 1) {
    endOfWeek.setDate(endOfWeek.getDate() - 1);
  }

  // Format the dates as strings in the "YYYY-MM-DD" format
  const startDateStr = formatDate(startOfWeek);
  const endDateStr = formatDate(endOfWeek);

  return [startDateStr, endDateStr];
};
