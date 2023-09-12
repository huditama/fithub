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
