import React from 'react';

import { getClasses } from './api';
import { formatDate, getNextWeekDate } from './helpers';

const today = new Date();

const Home = async () => {
  const classes = await getClasses(
    formatDate(today),
    getNextWeekDate(today),
  );

  return (
    <main>
      <pre>{JSON.stringify(classes, null, 2)}</pre>
    </main>
  );
};

export default Home;
