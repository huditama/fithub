'use client';

import React, { FC, useContext, useEffect } from 'react';

import DateCard from '@/components/DateSelector/DateCard';
import { DatesData } from '@/types';
import { RootContext } from '@/contexts/RootContext';

type DateSelectorProps = {
  dates: DatesData[];
};

const DateSelector: FC<DateSelectorProps> = ({ dates }) => {
  const { selectedDate, setSelectedDate } = useContext(RootContext);

  useEffect(() => {
    const todayDate = dates[0].id;
    setSelectedDate(todayDate);
  }, [dates]);

  return (
    <div className="date-selector">
      {dates.map((item) => (
        <DateCard
          key={item.id}
          data={item}
          isSelected={selectedDate === item.id}
        />
      ))}
    </div>
  );
};

export default DateSelector;
