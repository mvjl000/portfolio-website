import { useEffect, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Burger from '../Burger/Burger';
import { Wrapper, BurgerWrapper, StyledMenu } from './Menu.styles';

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

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
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
