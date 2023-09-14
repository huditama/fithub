'use client';

import React, { FC, useContext, useEffect } from 'react';

import DateCard from '@/components/DateSelector/DateCard';
import { DatesData } from '@/types';
import { formatDate } from '@/helpers';
import { RootContext } from '@/contexts/RootContext';

type DateSelectorProps = {
  dates: DatesData[];
};

const today = new Date();
const formattedDateToday = formatDate(today);

const DateSelector: FC<DateSelectorProps> = ({ dates }) => {
  const { selectedDate, setSelectedDate } = useContext(RootContext);

  useEffect(() => {
    setSelectedDate(formattedDateToday.replace(/-/g, ''));
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
