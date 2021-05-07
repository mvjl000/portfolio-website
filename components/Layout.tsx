import { useEffect, useState } from 'react';
import Menu from './Navigation/Menu/Menu';
import Navigation from './Navigation/Navigation';

const Layout: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add('body-lock')
      : document.body.classList.remove('body-lock');
  }, [isMenuOpen]);

  return (
    <>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
