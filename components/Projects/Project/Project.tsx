import Link from 'next/link';
import Image from 'next/image';
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
  const { title, description, image, date, techStack, link } = project;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image.url} alt={image.alt} width={384} height={110} />
      </ImageWrapper>
      <ContentWrapper>
        <Link href={link}>
          <a target="_blank">
            <PostTitle>{title}</PostTitle>
          </a>
        </Link>
        <PostDescription>{description}</PostDescription>
        <PostTechStack>
          {techStack.tech.map((tech) => (
            <TechListItem key={tech.name} bgc={tech.bgc} color={tech.color}>
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
