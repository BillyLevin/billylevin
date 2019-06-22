import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Homepage from '../pages/homepage';
import OneMenu from '../pages/one-menu';
import { theme } from '../theme';

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

const Router: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" exact component={Homepage} />
          <Route path="/one-menu" component={OneMenu} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Router;
