import { createContext, useState, Dispatch, SetStateAction } from 'react';

type LanguageContextProps = [
  locale: 'en' | 'pl',
  setLocale: Dispatch<SetStateAction<'en' | 'pl'>>
];

export const defaultLocale = 'en';
export const locales = ['pl', 'en'];
export const LanguageContext = createContext<LanguageContextProps>([
  'en',
  () => {},
]);

const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<'en' | 'pl'>('en');

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
