import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  @media (min-width: 1024px) {
    &::after {
      position: absolute;
      top: -95%;
      left: 50%;
      display: block;
      content: '';
      background-color: #131313;
      width: 180%;
      height: 300%;
      transform: rotate(65deg);
      @media (min-width: 1024px) {
        top: -30%;
        left: 30%;
        width: 90%;
        height: 300%;
        transform: rotate(20deg);
      }
    }
  }
  iframe {
    position: absolute;
    top: 50%;
    left: 120px;
    transform: translateY(-50%);
  }
`;

export const StyledHeading = styled.h1`
  padding: 20px 30px;
  font-weight: 500;
  font-size: 48px;
  @media (min-width: 1024px) {
    padding: 40px 60px;
    font-size: 56px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 1024px) {
    position: absolute;
    left: 50%;
  }
`;

export const IframeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 120px;
  transform: translateY(-50%);
`;

export const ServiceText = styled.p`
  width: 80%;
  font-weight: 300;
  font-size: 21px;
  line-height: 130%;
  color: #111;
  z-index: 2;
  @media (min-width: 1024px) {
    font-size: 25px;
    color: #fff;
  }
`;

export const ContactText = styled.p`
  margin: 50px auto 20px;
  width: 80%;
  padding: 5px 10px;
  font-weight: 300;
  font-size: 21px;
  line-height: 130%;
  color: #fff;
  background-color: #111;
  z-index: 2;
  @media (min-width: 1024px) {
    color: #111;
    background-color: #fff;
  }
`;
