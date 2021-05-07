import { Link as ScrollLink } from 'react-scroll';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Wrapper, ProfessionHeading, ArrowWrapper } from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <ProfessionHeading>Frontend Developer</ProfessionHeading>
      <ScrollLink
        activeClass="active"
        to="about_scrollTarget"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
      >
        <ArrowWrapper>
          <p>Get to know me better</p>
          <KeyboardArrowDownIcon />
        </ArrowWrapper>
      </ScrollLink>
    </Wrapper>
  );
};

export default Hero;
