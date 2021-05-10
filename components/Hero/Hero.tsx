import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from '../../hooks/useTranslation';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Wrapper, ProfessionHeading, ArrowWrapper } from './Hero.styles';

const Hero: React.FC = () => {
  const { translate } = useTranslation();

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
          <p>{translate('intro')}</p>
          <KeyboardArrowDownIcon />
        </ArrowWrapper>
      </ScrollLink>
    </Wrapper>
  );
};

export default Hero;
