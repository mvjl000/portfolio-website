import { NextPage } from 'next';
import {
  Wrapper,
  Heading,
  Subheading,
} from '../components/Projects/Project.styles';

const ProjectsPage: NextPage = () => {
  return (
    <Wrapper>
      <Heading>Projects & other activity</Heading>
      <Subheading>
        Here I upload all of my side projects and contributions, take a look at
        them 😀
      </Subheading>
    </Wrapper>
  );
};

export default ProjectsPage;
