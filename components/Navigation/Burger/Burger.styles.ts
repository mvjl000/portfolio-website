import styled from 'styled-components';

const Burger = styled.button`
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
    transition: 0.2s;
  }
`;

export const OpenBurger = styled(Burger)`
  &::before {
    top: 0;
    left: 0;
    background-color: #fff;
  }
  &::after {
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
`;

export const CloseBurger = styled(Burger)`
  &::before {
    top: 0;
    left: 0;
    transform: translateY(8.5px) rotate(45deg);
    background-color: #000;
  }
  &::after {
    bottom: 0;
    left: 0;
    transform: translateY(-8.5px) rotate(-45deg);
    background-color: #000;
  }
`;
