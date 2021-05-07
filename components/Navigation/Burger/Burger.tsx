import { OpenBurger, CloseBurger } from './Burger.styles';

interface BurgerProps {
  isOpenVariant: boolean;
  onButtonClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ onButtonClick, isOpenVariant }) => {
  if (isOpenVariant) {
    return <OpenBurger onClick={onButtonClick} />;
  } else {
    return <CloseBurger onClick={onButtonClick} />;
  }
};

export default Burger;
