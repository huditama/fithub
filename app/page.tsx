import React from 'react';

import { getClasses } from './api';
import { formatClasses, formatDate, getNextWeekDate } from './helpers';

const today = new Date();

const Home = async () => {
  const classes = await getClasses(
    formatDate(today),
    getNextWeekDate(today),
  );

  const formattedClasses = formatClasses(classes);

  return (
    <main>
      <pre>{JSON.stringify(formattedClasses, null, 2)}</pre>
    </main>
  );
};

export default Home;
