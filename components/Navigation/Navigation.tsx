import { useEffect, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import { Wrapper } from './Navigation.styles';
import Burger from './Burger/Burger';
import Language from './Language/Language';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const router = useRouter();
  const pathname = router.pathname.split('/')[1];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  console.log(pathname === '');

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Logo pathname={pathname} />
        </a>
      </Link>
      <Burger
        onButtonClick={() => setIsMenuOpen(!isMenuOpen)}
        isOpenVariant={true}
        pathname={pathname}
      />
      {pathname === '' && <Language />}
    </Wrapper>
  );
};

export default Navigation;
