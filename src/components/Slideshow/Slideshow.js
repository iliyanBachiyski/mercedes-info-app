import React from "react";
import classes from "./Slideshow.module.css";

const slideshow = props => (
  <div className={classes.Slideshow}>
    <img src={props.image.url} alt={props.image.alt} />
  </div>
);

export default slideshow;
