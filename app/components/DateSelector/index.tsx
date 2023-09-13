'use client';

import React, { FC, useContext, useEffect } from 'react';

import DateCard from '@/components/DateSelector/DateCard';
import { DatesData } from '@/types';
import { RootContext } from '@/contexts/RootContext';

type DateSelectorProps = {
  dates: DatesData[];
};

const DateSelector: FC<DateSelectorProps> = ({ dates }) => {
  const rootContext = useContext(RootContext);
  const appState = rootContext?.appState;
  const setAppState = rootContext?.setAppState;

  useEffect(() => {
    setAppState({
      ...appState,
      selectedDate: dates[0].id,
    });
  }, [dates]);

  return (
    <div className="date-selector">
      {dates.map((item) => (
        <DateCard
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default DateSelector;
