import React, { FC } from 'react';

import { Icons } from '@/themes/icons';
import { ClassData } from '@/types';

type ClassCardProps = {
  classData: ClassData;
};

const ClassCard: FC<ClassCardProps> = ({ classData }) => {
  const {
    instructor,
    className,
    timeSchedule,
    classDuration,
    classType,
    classDifficulty,
    backgroundImage,
  } = classData;

  const backgroundImageStyle = {
    // Conditionally set backgroundImage based on the presence of backgroundImage
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    // Adjust backgroundPosition to start from the top and move down slightly
    backgroundPosition: 'center top calc(50% + 40px)',
    // Add a default background color when backgroundImage is falsy
    backgroundColor: backgroundImage ? 'transparent' : '#8F979D',
  };

  const formatInstructorName = instructor.split(' ')[0];

  // Use a type assertion here to let TypeScript know that classType is a valid key for Icons
  const iconSrc = Icons[classType?.toUpperCase() as keyof typeof Icons];

  return (
    <div className="class-card shadow" style={backgroundImageStyle}>
      <div className="space-between">
        <img alt={`${classType} icon`} src={iconSrc} />
        <p style={{ fontSize: '20px' }} className="text-bold">{timeSchedule}</p>
      </div>
      <p style={{ color: 'white' }} className="heading-2 text-bold">{className}</p>
      <p style={{ color: 'white' }} className="text-base">{`By ${formatInstructorName}`}</p>
      <div className="space-between spacer">
        <div className="row">
          <img className="dumbbell" alt="dumbell icon" src={Icons.DUMBBELL} />
          <p className="small-text">{classDifficulty?.toUpperCase() || 'MEDIUM'}</p>
        </div>
        <div className="duration">
          <p style={{ color: 'black' }} className="text-base text-bold">{`${classDuration} MIN`}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
