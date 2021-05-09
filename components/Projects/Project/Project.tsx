import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  PostTitle,
  PostDescription,
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
        <p>React, typescript etc</p>
        <PostDate>4/20/2021</PostDate>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Project;
