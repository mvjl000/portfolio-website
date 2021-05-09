import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  PostTitle,
  PostDescription,
  PostTechStack,
  TechListItem,
  PostDate,
} from './Project.styles';

const Project: React.FC = () => {
  return (
    <Wrapper>
      <ImageWrapper />
      <ContentWrapper>
        <PostTitle>Socnet</PostTitle>
        <PostDescription>
          Fullstack web-application for Currency Exchange point. SEO friendly
          thanks to SSR, it has an admin tool for managing currencies.
        </PostDescription>
        <PostTechStack>
          <TechListItem bgc="#5ed3f3" color="#111">
            React
          </TechListItem>
          <TechListItem bgc="#fff" color="#111">
            NextJS
          </TechListItem>
          <TechListItem bgc="#2f74c0" color="#fff">
            Typescript
          </TechListItem>
          <TechListItem bgc="#6fa660" color="#fff">
            NodeJS
          </TechListItem>
        </PostTechStack>
        <PostDate>4/20/2021</PostDate>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Project;
