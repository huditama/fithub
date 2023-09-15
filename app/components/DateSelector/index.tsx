'use client';

import React, {
  FC,
  useContext,
  useEffect,
  useRef,
} from 'react';

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
  const scrollToRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setSelectedDate(formattedDateToday.replace(/-/g, ''));
  }, [dates]);

  useEffect(() => {
    // Scroll to the DateCard when the component mounts
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, []);

  return (
    <div className="date-selector">
      {dates.map((item) => (
        <DateCard
          key={item.id}
          data={item}
          isSelected={selectedDate === item.id}
          scrollToRef={item.id === selectedDate ? scrollToRef : null}
        />
      ))}
    </div>
  );
};

export default DateSelector;
