import { NextPage } from 'next';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
