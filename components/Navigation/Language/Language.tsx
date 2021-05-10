import { useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { LanguageContext } from '../../../context/LanguageProvider';

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 65px;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  img {
    margin-right: 5px;
    width: 20px;
  }
`;

const Language: React.FC = () => {
  const [locale, setLocale] = useContext(LanguageContext);
  console.log(locale);

  const handleLanguageChange = () => {
    if (locale === 'en') {
      setLocale('pl');
    } else {
      setLocale('en');
    }
  };

  const flagPath =
    locale === 'en' ? '/images/flags/poland.png' : '/images/flags/england.png';

  const switchLang = locale === 'en' ? 'PL' : 'EN';

  return (
    <Wrapper onClick={handleLanguageChange}>
      <Image src={flagPath} width={20} height={20} />
      {switchLang}
    </Wrapper>
  );
};

export default Language;
