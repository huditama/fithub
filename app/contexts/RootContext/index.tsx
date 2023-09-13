'use client';

import React, {
  FC,
  ReactNode,
  createContext,
  useState,
  useMemo,
  Dispatch,
} from 'react';

import { DatesData, FormattedScheduleData } from '@/types';

const initialAppState: {
  selectedDate: DatesData['id'];
  setSelectedDate: Dispatch<React.SetStateAction<DatesData['id']>>;
  classes: FormattedScheduleData[];
  setClasses: Dispatch<React.SetStateAction<FormattedScheduleData[]>>;
} = {
  selectedDate: '',
  setSelectedDate: () => { },
  classes: [],
  setClasses: () => { },
};

export const RootContext = createContext(initialAppState);

type RootProviderProps = {
  children: ReactNode;
};

const RootProvider: FC<RootProviderProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<DatesData['id']>('');
  const [classes, setClasses] = useState<FormattedScheduleData[]>([]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    selectedDate,
    setSelectedDate,
    classes,
    setClasses,
  }), [
    selectedDate,
    setSelectedDate,
    classes,
    setClasses,
  ]);

  return (
    <RootContext.Provider value={contextValue}>
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;
