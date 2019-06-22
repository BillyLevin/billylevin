import * as React from 'react';
import Contact from '../components/Contact';
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
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
