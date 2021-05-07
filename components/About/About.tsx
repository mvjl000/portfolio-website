import Image from 'next/image';
import {
  Wrapper,
  StyledHeading,
  ContentWrapper,
  AboutContent,
  ToolSetWrapper,
  ImageWrapper,
  TechWrapper,
} from './About.styles';

const About: React.FC = () => {
  return (
    <Wrapper>
      <div id="about_scrollTarget" />
      <StyledHeading>#About Me</StyledHeading>
      <ContentWrapper>
        <AboutContent>
          Hi, it's good to see you here! My name is Milosz - 17 y.o. I live in
          Poland, based in Rzeszow. I'm freelancer Web Developer, mainly focused
          on frontend, but I enjoy backend as well (Javascript - Typescript -
          Node). Started learning to code in late 2019, fell in love with React
          few months later. Broad minded and willing to keep learning. Besides
          of coding I like to train at the gym.
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
        <p>Best combo, try to change my mind down in contact section</p>
        <p>( ͡° ͜ʖ ͡°):</p>
        <div>
          <ImageWrapper>
            <Image src="/images/typescript-logo.png" width={300} height={300} />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/images/react-logo-square.png"
              width={350}
              height={300}
            />
          </ImageWrapper>
        </div>
      </ToolSetWrapper>
    </Wrapper>
  );
};

export default About;
