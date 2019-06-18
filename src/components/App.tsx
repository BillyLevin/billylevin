import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Hero from "./Hero";

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
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  padding: 8rem 4rem;
  overflow-y: scroll;
  background-color: green;
}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
    </>
  );
};

export default App;
