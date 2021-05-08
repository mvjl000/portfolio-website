import { useScreen } from '../../hooks/useScreen';
import {
  Wrapper,
  StyledHeading,
  ContentWrapper,
  IframeContainer,
  ServiceText,
  ContactText,
} from './Contact.styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const Contact: React.FC = () => {
  const { isDesktopMode } = useScreen();

  return (
    <Wrapper>
      <StyledHeading>#Services & Contact</StyledHeading>
      {isDesktopMode && (
        <iframe
          src="https://giphy.com/embed/xT9DPIlGnuHpr2yObu"
          width="480"
          height="359"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <ContentWrapper>
        <ServiceText>
          I can make for you any type of website / web-application starting from
          designing UI, creating website and simple backend for it.
          <br />
          <br />I might also help you with deploying app, and explain basics of
          managing it.
        </ServiceText>
        <ContactText>
          If you would like to make cooperation with me, contact me via email or
          social media linked down below. We will discuss then all details.
        </ContactText>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
