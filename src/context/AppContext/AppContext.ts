import React, { useContext } from 'react';

import { GithubData } from '../../common/types';

export type AppContextData = GithubData;

const AppContext = React.createContext<AppContextData | undefined>(undefined);

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }

  return context;
};

export default AppContext;
