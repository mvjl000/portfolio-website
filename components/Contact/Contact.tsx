import Link from 'next/link';
import { useScreen } from '../../hooks/useScreen';
import {
  Wrapper,
  StyledHeading,
  ContentWrapper,
  ServiceText,
  ContactText,
  MediaList,
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
        <MediaList>
          <li>
            <MailOutlineIcon /> milosz.devmail@gmail.com
          </li>
          <Link href="https://www.linkedin.com/in/mi%C5%82osz-piskad%C5%82o-477a2a1b5/">
            <a target="_blank">
              <li>
                <LinkedInIcon /> Miłosz Piskadło
              </li>
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100021426672684">
            <a target="_blank">
              <li>
                <FacebookIcon /> Miłosz Piskadło
              </li>
            </a>
          </Link>
        </MediaList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
