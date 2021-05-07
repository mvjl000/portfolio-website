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

export const LogoWrapper = styled.div`
  z-index: 100;
  position: absolute;
  color: #000;
  top: 15px;
  left: 25px;
  display: flex;
  align-items: center;
  p {
    color: #000 !important;
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ListItem = styled.li`
  padding: 2px 10px;
  margin: 10px 0;
  color: #000;
  font-size: 23px;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  @media (min-width: 1024px) {
    bottom: 40px;
    right: 20px;
    transform: translateX(0%);
  }
  svg {
    color: #000;
    transform: scale(1.4);
    cursor: pointer;
    @media (min-width: 1024px) {
      transform: scale(1.5) translateY(10px);
    }
  }
`;
