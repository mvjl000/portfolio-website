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
import { ProjectTypes } from '../../../types/project';

interface ProjectProps {
  project: ProjectTypes;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { title, description, date, techStack } = project;

  return (
    <Wrapper>
      <ImageWrapper />
      <ContentWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostTechStack>
          {techStack.tech.map((tech) => (
            <TechListItem bgc={tech.bgc} color={tech.color}>
              {tech.name}
            </TechListItem>
          ))}
        </PostTechStack>
        <PostDate>{date}</PostDate>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Project;
