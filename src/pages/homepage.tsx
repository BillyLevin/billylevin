import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};

export default Homepage;
