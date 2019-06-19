import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { theme } from "../theme";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; 
  box-sizing: border-box;
}

body {
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  overflow-y: scroll;
  background-color: #eee;
}
`;

const Homepage: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
