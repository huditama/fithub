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

export const formatDates = (classesData: ClassData) => Object.keys(classesData).map((dateKey) => {
  // Extract year, month, and day components from the dateKey string
  const year = parseInt(dateKey.slice(0, 4), 10);
  const month = parseInt(dateKey.slice(4, 6), 10) - 1; // Months are zero-based
  const day = parseInt(dateKey.slice(6), 10);

  // Create a JavaScript Date object for the specified date
  const formattedDate = new Date(year, month, day);

  // Get the day of the week in "Monday" format
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const formattedDay = daysOfWeek[formattedDate.getDay()];

  // Create the formatted object
  return {
    id: dateKey,
    day: formattedDay,
    date: day,
    month: formattedDate.toLocaleString('en-us', { month: 'long' }),
    year,
  };
});

export const capitalizeFirstThreeLetters = (string: string) => string.slice(0, 3).toUpperCase();
