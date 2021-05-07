import { useEffect, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import Logo from './Logo';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Wrapper, IconsWrapper } from './Navigation.styles';
import Burger from './Burger/Burger';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const router = useRouter();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <Wrapper>
      <Logo />
      {/* <IconsWrapper>
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
      </IconsWrapper> */}
      <Burger
        onButtonClick={() => setIsMenuOpen(!isMenuOpen)}
        isOpenVariant={true}
      />
    </Wrapper>
  );
};

export default Navigation;
