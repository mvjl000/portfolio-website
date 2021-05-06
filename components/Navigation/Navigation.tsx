import Link from 'next/link';
import Logo from './Logo';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Wrapper, IconsWrapper } from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <IconsWrapper>
        <Link href="https://www.instagram.com/mvjl000/">
          <a target="_blank">
            <InstagramIcon />
          </a>
        </Link>
        <Link href="https://github.com/mvjl000">
          <a target="_blank">
            <GitHubIcon />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mi%C5%82osz-piskad%C5%82o-477a2a1b5/">
          <a target="_blank">
            <LinkedInIcon />
          </a>
        </Link>
      </IconsWrapper>
    </Wrapper>
  );
};

export default Navigation;
