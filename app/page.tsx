import React from 'react';

import {
  // formatClasses,
  formatDate,
  formatDates,
  getNextWeekDate,
} from '@/helpers';
import DateSelector from '@/components/DateSelector';
import { getClasses } from '@/api';

const today = new Date();

const Home = async () => {
  const classes = await getClasses(
    formatDate(today),
    getNextWeekDate(today),
  );

  // const formattedClasses = formatClasses(classes);
  const formattedDates = formatDates(classes);

  return (
    <main>
      <DateSelector dates={formattedDates} />
      {/* <pre>{JSON.stringify(formattedDates, null, 2)}</pre> */}
    </main>
  );
};

export default Home;
