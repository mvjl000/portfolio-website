import { Wrapper } from './TechStack.styles';
import TechList from '../TechList/TechList';
import { TechListTypes } from '../../../types/techlist';

interface TechStackProps {
  techStack: TechListTypes[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  return (
    <Wrapper>
      {techStack.map((stack) => (
        <TechList techStack={stack} />
      ))}
    </Wrapper>
  );
};

export default TechStack;
