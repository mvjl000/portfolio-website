import { useContext } from 'react';

import { LanguageContext, defaultLocale } from '../context/LanguageProvider';
import { LangStrings } from '../translations/Strings';

type KeyType = 'intro';

export const useTranslation = () => {
  const [locale] = useContext(LanguageContext);

  function t(key: KeyType) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || '';
  }

  return { t, locale };
};
