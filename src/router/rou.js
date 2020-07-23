import React from "react";
import App from "../main/App";
import Home from "./home";
import Navigation from "./link";
import About from "../main/about";
import { HashRouter, Route } from "react-router-dom";

function Rou() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </HashRouter>
  );
}

export default Rou;
