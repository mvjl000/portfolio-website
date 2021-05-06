import styled from 'styled-components';

export interface StyledBurgerProps {
  isActive: boolean;
}

export const StyledBurger = styled.button<StyledBurgerProps>`
  position: relative;
  margin-top: 11px;
  width: 40px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: 0.2s;
  }

  &::before {
    top: 0;
    left: 0;
    transform: ${({ isActive }) =>
      isActive ? 'translateY(8.5px) rotate(45deg)' : ''};
  }

  &::after {
    bottom: 0;
    left: 0;
    transform: ${({ isActive }) =>
      isActive ? 'translateY(-8.5px) rotate(-45deg)' : ''};
  }
`;
