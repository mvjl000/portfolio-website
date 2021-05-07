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
  background-color: #755f5f;
  ${({ isLeft }) => isLeft && 'left: 0'};
  ${({ isLeft }) => !isLeft && 'right: 0'};
  ${({ isLeft }) => !isLeft && 'background-color: #bcb8b1'};
`;
