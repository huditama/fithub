'use client';

import React, { FC, useContext, useEffect } from 'react';

import { RootContext } from '@/contexts/RootContext';
import { FormattedScheduleData } from '@/types';

type ClassListProps = {
  classes: FormattedScheduleData[];
};

const ClassList: FC<ClassListProps> = ({ classes }) => {
  const {
    selectedDate,
    setClasses,
    classes: classesFromContext,
  } = useContext(RootContext);

  useEffect(() => {
    setClasses(classes);
  }, [classes]);

  const classesInChosenDate = classesFromContext.find((item) => item.id === selectedDate);

  return <pre>{JSON.stringify(classesInChosenDate, null, 2)}</pre>;
};

export default ClassList;
