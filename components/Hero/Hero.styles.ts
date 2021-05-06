import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    transform: translateY(0) scale(1.8);
  }
  to {
    transform: translateY(-7px) scale(1.8);
  }
`;

const bounceBigger = keyframes`
  from {
    transform: translateY(0) scale(2.2);
  }
  to {
    transform: translateY(5px) scale(2.2);
  }
`;

export const Wrapper = styled.section`
  background-color: #333;
`;

export const ProfessionHeading = styled.h1`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 58px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  cursor: pointer;
  p {
    color: white;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 15px;
    @media (min-width: 1024px) {
      font-size: 26px;
      margin-bottom: 25px;
    }
  }
  svg {
    color: white;
    transform: scale(1.8);
    animation: ${bounce} 0.5s ease-out infinite alternate;
    @media (min-width: 1024px) {
      transform: scale(2.2);
      animation: ${bounceBigger} 0.5s ease-out infinite alternate;
    }
  }
`;
