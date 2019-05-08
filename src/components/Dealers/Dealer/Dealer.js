import React from "react";
import Card from "../../Card/Card";
import classes from "./Dealer.module.css";

const dealer = props => (
  <div className={classes.Dealer}>
    <div
      className={[classes.Address, classes.Card, classes.CardLeft].join(" ")}
    >
      <Card />
    </div>
    <div
      className={[classes.Communication, classes.Card, classes.CardRight].join(
        " "
      )}
    >
      <Card />
    </div>
    <div
      className={[classes.ProductGroup, classes.Card, classes.CardLeft].join(
        " "
      )}
    >
      <Card />
    </div>
    <div
      className={[classes.OpeningHours, classes.Card, classes.CardRight].join(
        " "
      )}
    >
      <Card />
    </div>
  </div>
);

export default dealer;
