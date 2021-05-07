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
  background-image: url('/images/darkerWallSide.JPG');
  background-repeat: no-repeat;
  background-position: 45% 10%;
`;

export const ProfessionHeading = styled.h1`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 58px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  @media (min-width: 1213px) {
    top: 72%;
  }
  @media (min-width: 1400px) {
    font-size: 64px;
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  cursor: pointer;
  @media (min-width: 1024px) {
    bottom: 3%;
  }
  @media (min-width: 1213px) {
    bottom: 6%;
  }
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
