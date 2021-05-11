import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
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
      z-index: 0;
      @media (min-width: 1024px) {
        top: -30%;
        left: 25%;
        width: 90%;
        height: 300%;
        transform: rotate(20deg);
      }
      @media (min-width: 1260px) {
        left: 26%;
      }
    }
  }
  iframe {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    @media (min-width: 1260px) {
      left: 18%;
    }
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
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 1024px) {
    position: absolute;
    left: 50%;
  }
`;

export const ServiceText = styled.p`
  width: 80%;
  font-weight: 300;
  font-size: 21px;
  line-height: 130%;
  color: #111;
  z-index: 2;
  @media (min-width: 1024px) {
    font-size: 23px;
    color: #fff;
  }
  @media (min-width: 1500px) {
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

export const MediaList = styled.ul`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  z-index: 2;
  li {
    margin: 5px 0;
    color: #111;
    font-size: 17px;
    cursor: pointer;
    @media (min-width: 1024px) {
      color: #fff;
    }
    &:hover {
      text-decoration: underline;
    }
    svg {
      color: #111;
      transform: translateY(5px);
      margin-right: 10px;
      @media (min-width: 1024px) {
        margin-right: 15px;
        color: #fff;
      }
    }
  }
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const CopyRight = styled.p`
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: #000;
`;
