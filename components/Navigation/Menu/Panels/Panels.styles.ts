import styled from 'styled-components';
import { motion } from 'framer-motion';

interface StyledPanelProps {
  isLeft: boolean;
}

export const StyledPanel = styled(motion.div)<StyledPanelProps>`
  height: 100vh;
  width: 50vw;
  position: absolute;
  z-index: 11;
  background-color: #ccc;
  ${({ isLeft }) => isLeft && 'left: 0'};
  ${({ isLeft }) => !isLeft && 'right: 0'};
  /* ${({ isLeft }) => !isLeft && 'background-color: #444'}; */
`;
