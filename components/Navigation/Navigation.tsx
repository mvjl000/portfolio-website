import { useEffect, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { Wrapper } from './Navigation.styles';
import Burger from './Burger/Burger';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const router = useRouter();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Burger
        onButtonClick={() => setIsMenuOpen(!isMenuOpen)}
        isOpenVariant={true}
      />
    </Wrapper>
  );
};

export default Navigation;
