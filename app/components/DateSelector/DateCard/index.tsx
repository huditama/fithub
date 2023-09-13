'use client';

import React, { FC, useContext } from 'react';

import { DatesData } from '@/types';
import { capitalizeFirstThreeLetters } from '@/helpers';
import { RootContext } from '@/contexts/RootContext';

type DateCardProps = {
  data: DatesData;
  isSelected: boolean;
};

const DateCard: FC<DateCardProps> = ({ data, isSelected }) => {
  const { setSelectedDate } = useContext(RootContext);

  const formatDay = capitalizeFirstThreeLetters(data.day);
  const formatMonth = capitalizeFirstThreeLetters(data.month);
  const textColorClass = isSelected ? '' : 'unselected-text';

  const onPressCard = (dateId: DatesData['id']) => () => {
    setSelectedDate(dateId);
  };

  return (
    <button
      type="button"
      className={`date-card shadow ${isSelected ? 'selected' : ''}`}
      onClick={onPressCard(data.id)}
    >
      <p className={`text-base text-bold ${textColorClass}`}>{formatDay}</p>
      <p className={`heading-2 text-bold ${textColorClass}`}>{data.date}</p>
      <p className={`text-base ${textColorClass}`}>{formatMonth}</p>
    </button>
  );
};

export default DateCard;
