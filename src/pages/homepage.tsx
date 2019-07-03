import * as React from 'react';
import { useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Homepage: React.FC = () => {
  const projectsRef = useRef(null);
  return (
    <>
      <Header />
      <Hero projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </>
  );
};

export default Homepage;
