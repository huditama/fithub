import React from 'react';

import {
  formatClasses,
  formatDate,
  formatDates,
  getWeekStartEnd,
} from '@/helpers';
import { getClasses } from '@/api';
import ClassList from '@/components/ClassList';
import DateSelector from '@/components/DateSelector';

const today = new Date();
const formattedDateToday = formatDate(today);
const [startDate, endDate] = getWeekStartEnd(formattedDateToday);

const Home = async () => {
  const classes = await getClasses(
    startDate,
    endDate,
  );

  const formattedClasses = formatClasses(classes);
  const formattedDates = formatDates(startDate, endDate);

  return (
    <main>
      <div className="container">
        <DateSelector dates={formattedDates} />
        <ClassList classes={formattedClasses} />
      </div>
    </main>
  );
};

export default Home;
