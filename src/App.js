import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dealer" render={() => <div>Dealer</div>} />
        <Route path="/gallery" render={() => <div>Gallery</div>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
