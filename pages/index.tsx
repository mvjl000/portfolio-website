import { NextPage } from 'next';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <section></section>
    </>
  );
};

export default HomePage;
