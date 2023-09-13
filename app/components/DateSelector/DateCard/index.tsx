'use client';

import React, { FC } from 'react';

import { DatesData } from '@/types';
import { capitalizeFirstThreeLetters } from '@/helpers';

type DateCardProps = {
  data: DatesData,
  onPress: (dateId: DatesData['id']) => void,
  isSelected: boolean
};

const DateCard: FC<DateCardProps> = ({ data, onPress, isSelected }) => {
  const formatDay = capitalizeFirstThreeLetters(data.day);
  const formatMonth = capitalizeFirstThreeLetters(data.month);
  const textColorClass = isSelected ? '' : 'unselected-text';

  const onPressCard = (dateId: DatesData['id']) => () => {
    if (onPress) {
      onPress(dateId);
    }
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
