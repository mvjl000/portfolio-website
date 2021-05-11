import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '../../../context/LanguageProvider';
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
import GitHubIcon from '@material-ui/icons/GitHub';

interface ProjectProps {
  project: ProjectTypes;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [locale, setLocale] = useContext(LanguageContext);

  const {
    title,
    enDescription,
    plDescription,
    image,
    date,
    techStack,
    link,
    github,
  } = project;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image.url} alt={image.alt} width={384} height={110} />
      </ImageWrapper>
      {github && (
        <Link href={github}>
          <a target="_blank">
            <GitHubIcon />
          </a>
        </Link>
      )}
      <ContentWrapper>
        <Link href={link}>
          <a target="_blank">
            <PostTitle>{title}</PostTitle>
          </a>
        </Link>
        <PostDescription>
          {locale === 'en' ? enDescription : plDescription}
        </PostDescription>
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
