'use client';

import React, { FC, useContext, useEffect } from 'react';

import ClassCard from '@/components/ClassList/ClassCard';
import { RootContext } from '@/contexts/RootContext';
import { ClassData, FormattedScheduleData } from '@/types';

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
  const morningClasses = classesInChosenDate?.morning;
  const eveningClasses = classesInChosenDate?.evening;

  const renderClassList = (classesData: ClassData[]) => (
    <div className="classes-container">
      {classesData.map((item) => <ClassCard key={JSON.stringify(item)} classData={item} />)}
    </div>
  );

  return (
    <div className="class-list">
      {
        morningClasses?.length ? (
          <div className="time-category">
            <p className="heading-3 text-bold">MORNING</p>
            {renderClassList(morningClasses)}
          </div>
        ) : null
      }

      {
        eveningClasses?.length ? (
          <div className="time-category">
            <p className="heading-3 text-bold">EVENING</p>
            {renderClassList(eveningClasses)}
          </div>
        ) : null
      }
    </div>
  );
};

export default ClassList;
