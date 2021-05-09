import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 120px 0;
  background-color: #111;
`;

export const Heading = styled.h1`
  background: -webkit-linear-gradient(
    207deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(167, 167, 167, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  @media (min-width: 1024px) {
    margin-top: 30px;
    padding-left: 70px;
    text-align: left;
    font-size: 62px;
  }
  @media (min-width: 1400px) {
    margin-top: 40px;
    padding-left: 100px;
    font-size: 72px;
  }
`;
