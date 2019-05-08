import React from "react";
import classes from "./Card.module.css";

const card = props => {
  const content = [];
  for (let key in props.object) {
    const row = (
      <div className={classes.Item} key={key}>
        {key}: {props.object[key]}
      </div>
    );
    content.push(row);
  }
  return (
    <div className={classes.Card}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Content}>{content}</div>
    </div>
  );
};

export default card;
