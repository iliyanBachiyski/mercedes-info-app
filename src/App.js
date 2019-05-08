import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Dealers from "./components/Dealers/Dealers";
import { Route, Switch } from "react-router";
import classes from "./App.module.css";

const app = () => (
  <div className={classes.App}>
    <Header />
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/dealers" render={() => <Dealers />} />
      <Route path="/search" render={() => <div>Search</div>} />
    </Switch>
    <Footer />
  </div>
);

export default app;
