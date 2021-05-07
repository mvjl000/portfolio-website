import { Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Burger from '../Burger/Burger';
import { Wrapper, LogoWrapper, BurgerWrapper, StyledMenu } from './Menu.styles';
import Panels from './Panels/Panels';
import Logo from '../Logo';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const parent = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
};

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
                <div className="container">
                  <div className="menu-inner">
                    <motion.ul
                      variants={parent}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <li>Hello</li>
                      <li>World</li>
                      <li>Will it work?</li>
                    </motion.ul>
                  </div>
                </div>
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
