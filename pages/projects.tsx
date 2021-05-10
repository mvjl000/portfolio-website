import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { useTranslation } from '../hooks/useTranslation';
import {
  Wrapper,
  Heading,
  Subheading,
  CopyRight,
} from '../components/Projects/Projects.styles';
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
						link,
            github,
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
    revalidate: 600,
  };
};

const ProjectsPage: NextPage<ProjectsProps> = ({ projects }) => {
  const { translate } = useTranslation();

  return (
    <>
      <Head>
        <meta name="description" content="Take a look at my work!" />
        <title>Projects</title>
      </Head>
      <Wrapper>
        <Heading>{translate('projectsHeading')}</Heading>
        <Subheading>{translate('projectsText')}😀</Subheading>
        {projects.map((prj) => (
          <Project key={prj.id} project={prj} />
        ))}
        <CopyRight>Copyright © 2021 Miłosz Piskadło</CopyRight>
      </Wrapper>
    </>
  );
};

export default ProjectsPage;
