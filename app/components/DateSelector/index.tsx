'use client';

import React, { FC, useState } from 'react';

import DateCard from '@/components/DateSelector/DateCard';
import { DatesData } from '@/types';

type DateSelectorProps = {
  dates: DatesData[];
};

const DateSelector: FC<DateSelectorProps> = ({ dates }) => {
  const [selectedDate, setSelectedDate] = useState<DatesData['id']>(dates[0].id);

  const onPressDateCard = (dateId: DatesData['id']) => {
    setSelectedDate(dateId);
  };

  return (
    <div className="date-selector">
      {dates.map((item) => (
        <DateCard
          key={item.id}
          onPress={onPressDateCard}
          data={item}
          isSelected={item.id === selectedDate}
        />
      ))}
    </div>
  );
};

export default DateSelector;
