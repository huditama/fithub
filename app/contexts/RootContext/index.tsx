'use client';

import { DatesData, FormattedScheduleData } from '@/types';
import React, {
  FC,
  ReactNode,
  createContext,
  useState,
  useMemo,
} from 'react';

const initialAppState: {
  selectedDate: DatesData['id'];
  classes: FormattedScheduleData[];
} = {
  selectedDate: '',
  classes: [],
};

type AppState = typeof initialAppState;
type SetAppState = React.Dispatch<React.SetStateAction<AppState>>;

export const RootContext = createContext<{
  appState: AppState;
  setAppState: SetAppState;
}>({ appState: initialAppState, setAppState: () => { } });

type RootProviderProps = {
  children: ReactNode;
};

const RootProvider: FC<RootProviderProps> = ({ children }) => {
  const [appState, setAppState] = useState(initialAppState);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ appState, setAppState }), [appState, setAppState]);

  return (
    <RootContext.Provider value={contextValue}>
      {children}
    </RootContext.Provider>
  );
};

export default RootProvider;
