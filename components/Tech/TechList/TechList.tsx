import { ListWrapper, ListTitle, List } from './TechList.styles';
import { TechListTypes } from '../../../types/techlist';

interface TechListProps {
  techStack: TechListTypes;
}

const TechList: React.FC<TechListProps> = ({
  techStack: { branch, techList },
}) => {
  return (
    <ListWrapper>
      <ListTitle>{branch}</ListTitle>
      <List>
        {techList.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </List>
    </ListWrapper>
  );
};

export default TechList;
