import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Wrapper, ProfessionHeading, ArrowWrapper } from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <ProfessionHeading>Frontend Developer</ProfessionHeading>
      <ArrowWrapper>
        <p>Get to know me better</p>
        <KeyboardArrowDownIcon />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Hero;
