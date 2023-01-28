import React, { SetStateAction } from 'react';

export interface GithubData {
  language: string;
  setLanguage: React.Dispatch<SetStateAction<string>>;
}

export enum Language {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
}
