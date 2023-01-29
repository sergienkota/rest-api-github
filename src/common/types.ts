import React, { SetStateAction } from 'react';

export interface ApplicationData {
  language: string;
  setLanguage: React.Dispatch<SetStateAction<string>>;
  languageQuery: string;
}

export interface GithubData {
  name: string;
  forks: number;
  size: number;
  stargazers_count: number;
}

export enum Language {
  NONE = 'None',
  TYPESCRIPT = 'Typescript',
  JAVASCRIPT = 'Javascript',
}
