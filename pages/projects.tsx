import { NextPage } from 'next';
import axios from 'axios';
import {
  Wrapper,
  Heading,
  Subheading,
} from '../components/Projects/Project.styles';
import Project from '../components/Projects/Project/Project';
import { ProjectTypes } from '../types/project';

interface ProjectsProps {
  projects: ProjectTypes[];
}

export const getStaticProps = async () => {
  const query = `
         {
          allProjects {
            id,
            title,
            description,
            date,
            techStack,
            image {
              url,
              alt
            }
        	}
        }
      `;

  let projects: ProjectTypes[] = [];

  try {
    const responseData = await axios.post(
      `${process.env.CMS_URL}`,
      {
        query,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.CMS_TOKEN}`,
        },
      }
    );
    projects = responseData.data.data.allProjects;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      projects,
    },
  };
};

const ProjectsPage: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Wrapper>
      <Heading>Projects & other activity</Heading>
      <Subheading>
        Here I upload all of my side projects and contributions, take a look at
        them 😀
      </Subheading>
      {projects.map((prj) => (
        <Project project={prj} />
      ))}
    </Wrapper>
  );
};

export default ProjectsPage;
