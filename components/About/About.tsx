import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import {
  Wrapper,
  StyledHeading,
  ContentWrapper,
  AboutContent,
  ToolSetWrapper,
} from './About.styles';

const About: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <Wrapper>
      <div id="about_scrollTarget" />
      <StyledHeading>#{translate('aboutMeHeading')}</StyledHeading>
      <ContentWrapper>
        <AboutContent>
          {translate('aboutMeText1')}
          <br />
          <br />
          {translate('aboutMeText2')}
          <Link href="/projects">{translate('aboutMeProjectsLink')}</Link>
          {translate('aboutMeText3')}
          <br />
          <br />
          {translate('aboutMeText4')}
        </AboutContent>
        <iframe
          src="https://giphy.com/embed/xT5LMFZDsj0AKUDYTS"
          width="480"
          height="366"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </ContentWrapper>
      <ToolSetWrapper>
        <p>
          Typescript & React - best combo, try to change my mind in contact
          section ( ͡° ͜ʖ ͡°)
        </p>
      </ToolSetWrapper>
    </Wrapper>
  );
};

export default About;
