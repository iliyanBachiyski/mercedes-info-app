import React from "react";
import classes from "./InfoCard.module.css";

const infoCard = props => (
  <div className={classes.InfoCard}>
    <p>{props.content}</p>
    <button onClick={props.click}>View More</button>
  </div>
);

export default infoCard;
