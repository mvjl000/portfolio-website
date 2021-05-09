import styled from 'styled-components';

export const Wrapper = styled.article`
  margin: 50px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 500px;
  max-width: 1000px;
  border: 1px solid #fff;
  @media (min-width: 1024px) {
    height: 400px;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  @media (min-width: 1024px) {
    width: 30%;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  overflow-y: scroll;
  @media (min-width: 1024px) {
    height: 100%;
  }
`;

export const PostTitle = styled.h3`
  margin: 5px 0 0 20px;
  color: #fff;
  font-weight: 500;
  font-size: 28px;
  @media (min-width: 1024px) {
    margin-left: 50px;
    font-size: 38px;
  }
`;

export const PostDescription = styled.p`
  padding: 0 20px;
  font-size: 18px;
  color: #fff;
  line-height: 140%;
  @media (min-width: 1024px) {
    font-size: 22px;
    padding: 0 50px;
    line-height: 150%;
  }
`;

export const PostDate = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  font-weight: 300;
`;
