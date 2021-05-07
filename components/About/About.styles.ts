import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #19181c;
  padding-bottom: 50px;
`;

export const StyledHeading = styled.h1`
  padding: 20px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 48px;
  @media (min-width: 1024px) {
    padding: 40px 60px;
    font-size: 56px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 20px auto 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px;
  max-width: 1500px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }

  iframe {
    width: 80%;
    min-width: 290px;
    max-width: 470px;
    @media (min-width: 1024px) {
      min-width: 400px;
    }
  }
`;

export const AboutContent = styled.p`
  padding: 10px 25px;
  max-width: 1024px;
  color: white;
  font-size: 24px;
  font-weight: 300;
  @media (min-width: 1024px) {
    line-height: 150%;
  }
`;

export const ToolSetWrapper = styled.div`
  margin: 40px auto 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1500px;
  padding: 0 20px;
  @media (min-width: 1024px) {
    align-items: flex-start;
    padding: 0 40px;
  }
  div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }
  p {
    width: 100%;
    text-align: center;
    font-size: 19px;
    color: #fff;
    &:nth-child(2) {
      margin-bottom: 25px;
    }
    @media (min-width: 1024px) {
      &:nth-child(2) {
        margin-bottom: 50px;
      }
    }
  }
  img {
    display: block;
    margin: 20px 30px;
    width: 100px;
    @media (min-width: 1024px) {
      width: 150px;
    }
  }
`;

export const TechWrapper = styled.div`
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  margin: 10px 30px;
  @media (min-width: 1024px) {
    margin: 50px;
  }
`;
