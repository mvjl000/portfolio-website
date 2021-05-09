import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import Burger from '../Burger/Burger';
import {
  Wrapper,
  LogoWrapper,
  BurgerWrapper,
  StyledMenu,
  ListItem,
  IconsWrapper,
} from './Menu.styles';
import Panels from './Panels/Panels';
import Logo from '../Logo';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Wrapper
              initial={{ visibility: 'hidden' }}
              exit={{
                visibility: 'hidden',
                transition: { delay: 1 },
              }}
              animate={{
                visibility: 'visible',
                transition: { delay: 1 },
              }}
            >
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              <BurgerWrapper>
                <Burger isOpenVariant={false} onButtonClick={closeMenu} />
              </BurgerWrapper>
              <StyledMenu>
                <ul>
                  <Link href="/projects">
                    <a>
                      <ListItem>Projects</ListItem>
                    </a>
                  </Link>
                  <Link href="/tech">
                    <a>
                      <ListItem>Tech Stack</ListItem>
                    </a>
                  </Link>
                  <Link href="/setup">
                    <a>
                      <ListItem>My Setup</ListItem>
                    </a>
                  </Link>
                </ul>
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
              </StyledMenu>
            </Wrapper>
            <Panels />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
