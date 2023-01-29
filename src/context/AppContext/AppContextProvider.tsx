import React, { useState } from 'react';
import { ApplicationData } from '../../common/types';
import AppContext from './AppContext';
import { prepareQuery } from '../../common/utils';

type Props = {
  children: React.ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<string>('');

  const value: ApplicationData = {
    language,
    setLanguage,
    languageQuery: prepareQuery(language),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
