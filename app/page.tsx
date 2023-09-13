import React from 'react';

import {
  formatClasses,
  formatDate,
  formatDates,
  getNextWeekDate,
} from '@/helpers';
import { getClasses } from '@/api';
import ClassList from '@/components/ClassList';
import DateSelector from '@/components/DateSelector';

const today = new Date();

const Home = async () => {
  const classes = await getClasses(
    formatDate(today),
    getNextWeekDate(today),
  );

  const formattedClasses = formatClasses(classes);
  const formattedDates = formatDates(classes);

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
