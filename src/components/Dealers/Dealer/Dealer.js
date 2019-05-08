import React from "react";
import classes from "./Dealer.module.css";

const dealer = props => (
  <div className={classes.Dealer}>
    <div
      className={[classes.Address, classes.Card, classes.CardLeft].join(" ")}
    />
    <div
      className={[classes.Communication, classes.Card, classes.CardRight].join(
        " "
      )}
    />
    <div
      className={[classes.ProductGroup, classes.Card, classes.CardLeft].join(
        " "
      )}
    />
    <div
      className={[classes.OpeningHours, classes.Card, classes.CardRight].join(
        " "
      )}
    />
  </div>
);

export default dealer;
