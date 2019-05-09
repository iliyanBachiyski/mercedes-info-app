import React from "react";
import classes from "./InfoCard.module.css";

const infoCard = props => (
  <div className={classes.InfoCard}>
    <p>{props.content}</p>
    <a href={props.link}>View More</a>
  </div>
);

export default infoCard;
