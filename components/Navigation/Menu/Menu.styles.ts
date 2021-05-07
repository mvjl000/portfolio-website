import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9;
  overflow: hidden;
  background: #fff;
`;

export const BurgerWrapper = styled.div`
  z-index: 100;
  position: absolute;
  color: #000;
  top: 15px;
  right: 25px;
  display: flex;
  align-items: center;
`;

export const StyledMenu = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
  ul {
    width: 100%;
    display: block;
  }
`;
