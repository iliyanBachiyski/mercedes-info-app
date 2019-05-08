import React from "react";
import classes from "./Slideshow.module.css";

const slideshow = props => (
  <div className={classes.Slideshow}>
    <img src={props.url} alt="Vehicle" />
  </div>
);

export default slideshow;
