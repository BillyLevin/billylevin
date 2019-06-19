import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import OneMenu from "../pages/one-menu";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/one-menu" component={OneMenu} />
    </BrowserRouter>
  );
};

export default Router;
