import * as React from 'react';
import { useRef } from 'react';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Homepage: React.FC = () => {
  const projectsRef = useRef(null);
  return (
    <>
      <BackToTop />
      <Header />
      <Hero projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </>
  );
};

export default Homepage;
