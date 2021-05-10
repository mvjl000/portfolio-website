import { OpenBurger, CloseBurger } from './Burger.styles';

interface BurgerProps {
  isOpenVariant: boolean;
  onButtonClick: () => void;
  pathname?: string;
}

const Burger: React.FC<BurgerProps> = ({
  onButtonClick,
  isOpenVariant,
  pathname,
}) => {
  if (isOpenVariant) {
    return <OpenBurger onClick={onButtonClick} pathname={pathname} />;
  } else {
    return <CloseBurger onClick={onButtonClick} />;
  }
};

export default Burger;
