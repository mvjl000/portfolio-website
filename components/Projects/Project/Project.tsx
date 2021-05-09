import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  PostTitle,
  PostDescription,
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
        <h3>Cos tam dalej</h3>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Project;
