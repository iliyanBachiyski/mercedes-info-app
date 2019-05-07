import React from "react";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <div>Hi</div>} />
        <Route path="/dealer" render={() => <div>Dealer</div>} />
        <Route path="/gallery" render={() => <div>Gallery</div>} />
      </Switch>
    </div>
  );
}

export default App;
