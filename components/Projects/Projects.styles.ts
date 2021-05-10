import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 120px;
  background-color: #111;
`;

export const Heading = styled.h1`
  padding: 0 20px;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 58px;
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

export const Subheading = styled.h2`
  margin: 25px 0;
  padding: 0 10px;
  color: #eee;
  text-align: center;
  font-weight: 300;
  font-size: 23px;
  @media (min-width: 1024px) {
    margin-top: 40px;
    padding-left: 100px;
    text-align: left;
    font-size: 28px;
  }
`;

export const CopyRight = styled.p`
  text-align: center;
  padding: 10px 20px;
  color: #fff;
`;
