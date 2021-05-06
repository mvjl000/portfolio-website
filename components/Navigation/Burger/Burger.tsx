import { StyledBurgerProps, StyledBurger } from './Burger.styles';

interface BurgerProps extends StyledBurgerProps {
  onButtonClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ isActive, onButtonClick }) => (
  <StyledBurger onClick={onButtonClick} isActive={isActive} />
);

export default Burger;
