import React from "react";
import classes from "./Card.module.css";

const card = props => {
  return (
    <div className={classes.Card}>
      <div className={classes.Title}>Title</div>
      <div className={classes.Content}>
        <div className={classes.Item}>City: Sofia</div>
        <div className={classes.Item}>Street: My Street </div>
      </div>
    </div>
  );
};

export default card;
