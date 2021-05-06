import styled from 'styled-components';

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
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  p {
    color: white;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
    @media (min-width: 1024px) {
      font-size: 26px;
      margin-bottom: 20px;
    }
  }
  svg {
    color: white;
    transform: scale(1.5);
    cursor: pointer;
    @media (min-width: 1024px) {
      transform: scale(2.2);
    }
  }
`;
