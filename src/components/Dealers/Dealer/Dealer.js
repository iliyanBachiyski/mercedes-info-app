import React from "react";
import Card from "../../Card/Card";
import classes from "./Dealer.module.css";

const dealer = props => {
  const { dealer } = props;
  const productGroupObject = {};
  const openingHours = {};
  if (dealer.functions) {
    for (let i = 0; i < dealer.functions.length; i++) {
      const key = `${i + 1}.${dealer.functions[i].productGroup.name}`;
      productGroupObject[key] = dealer.functions[i].activity.name;
    }
  }
  if (dealer.openingHours) {
    const { weekdays } = dealer.openingHours[0];
    for (let key in weekdays) {
      openingHours[key] = weekdays[key].status;
    }
  }
  return (
    <div className={classes.Dealer}>
      <div
        className={[classes.Address, classes.Card, classes.CardLeft].join(" ")}
      >
        <Card title="Address" object={dealer.address} />
      </div>
      <div
        className={[
          classes.Communication,
          classes.Card,
          classes.CardRight
        ].join(" ")}
      >
        <Card title="Communication" object={dealer.communicationChannels} />
      </div>
      <div
        className={[classes.ProductGroup, classes.Card, classes.CardLeft].join(
          " "
        )}
      >
        <Card title="Product Group" object={productGroupObject} />
      </div>
      <div
        className={[classes.OpeningHours, classes.Card, classes.CardRight].join(
          " "
        )}
      >
        <Card title="Opening Hours" object={openingHours} />
      </div>
    </div>
  );
};

export default dealer;
