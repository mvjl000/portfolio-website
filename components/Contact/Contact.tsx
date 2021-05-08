import Link from 'next/link';
import { useScreen } from '../../hooks/useScreen';
import {
  Wrapper,
  StyledHeading,
  ContentWrapper,
  ServiceText,
  ContactText,
  MediaList,
  FormContainer,
  CopyRight,
} from './Contact.styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactForm from './ContactForm/ContactForm';

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
          If you would like to make cooperation with me, contact me via form or
          social media linked down below. We will discuss then all details.
        </ContactText>
        <FormContainer>
          <ContactForm />
          <MediaList>
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
            <Link href="https://www.instagram.com/mvjl000/">
              <a target="_blank">
                <li>
                  <InstagramIcon /> mvjl000
                </li>
              </a>
            </Link>
            <Link href="https://github.com/mvjl000">
              <a target="_blank">
                <li>
                  <GitHubIcon /> mvjl000
                </li>
              </a>
            </Link>
          </MediaList>
        </FormContainer>
      </ContentWrapper>
      <CopyRight>Copyright © 2021 Miłosz Piskadło</CopyRight>
    </Wrapper>
  );
};

export default Contact;
