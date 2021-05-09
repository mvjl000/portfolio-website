import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  PostTitle,
  PostDescription,
  PostTechStack,
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
          <li>React</li>
          <li>NextJS</li>
          <li>Typescript</li>
          <li>NodeJS</li>
        </PostTechStack>
        <PostDate>4/20/2021</PostDate>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Project;
