import Navigation from './Navigation/Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
