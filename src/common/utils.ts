import { Language } from './types';

export const prepareQuery = (language: string) => {
  return (language === '' || language === Language.NONE.toLowerCase()) ? '' : `+language:${language}`;
}