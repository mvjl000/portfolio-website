import Link from 'next/link';
import {
  Wrapper,
  StyledHeading,
  ContentWrapper,
  AboutContent,
  ToolSetWrapper,
} from './About.styles';

const About: React.FC = () => {
  return (
    <Wrapper>
      <div id="about_scrollTarget" />
      <StyledHeading>#About Me</StyledHeading>
      <ContentWrapper>
        <AboutContent>
          Hi, it's good to see you here! My name is Milosz - 17 y.o. I live in
          Poland, based in Rzeszow. I'm a freelancer Web Developer, mainly
          focused on frontend, but I enjoy backend as well (Javascript -
          Typescript - Node).
          <br />
          <br />
          Started learning to code in late 2019, fell in love with React few
          months later. Broad minded and willing to keep learning. Check out my{' '}
          <Link href="/projects">projects</Link> to see the fruits of my labor.
          <br />
          <br />
          Besides of coding I like to train at the gym.
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
          Typescript & React - best combo, try to change my mind down in contact
          section ( ͡° ͜ʖ ͡°)
        </p>
      </ToolSetWrapper>
    </Wrapper>
  );
};

export default About;
