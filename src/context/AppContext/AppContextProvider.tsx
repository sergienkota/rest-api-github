import React, { useState } from 'react';
import { GithubData, Language } from '../../common/types';
import AppContext from './AppContext';

type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<string>(
    Language.TYPESCRIPT as string
  );
  console.log('context');
  const value: GithubData = {
    language,
    setLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
