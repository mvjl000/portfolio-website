import styled from 'styled-components';

interface TechListItemProps {
  bgc: string;
  color: string;
}

export const Wrapper = styled.article`
  margin: 50px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 600px;
  max-width: 1000px;
  border: 1px solid #fff;
  @media (min-width: 1024px) {
    margin: 80px auto;
    height: 400px;
    flex-direction: row;
  }
  svg {
    position: absolute;
    bottom: 50px;
    right: 20px;
    color: white;
    transform: scale(1.1);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @media (min-width: 1024px) {
    width: 30%;
    height: 100%;
  }

  div {
    @media (min-width: 1024px) {
      transform: rotate(-90deg);
    }
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
  font-size: 30px;
  text-decoration: underline;
  transition: 0.2s;
  &:hover {
    color: lightblue;
  }
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

export const PostTechStack = styled.ul`
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  @media (min-width: 1024px) {
    margin: 0 50px;
    max-width: 400px;
  }
`;

export const TechListItem = styled.li<TechListItemProps>`
  padding: 1px 3px;
  margin: 3px;
  background-color: ${({ bgc }) => bgc};
  color: ${({ color }) => color};
`;

export const PostDate = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  font-weight: 300;
`;
