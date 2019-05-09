import React from "react";
import { Slide } from "react-slideshow-image";
import classes from "./Slideshow.module.css";

const slideshow = props => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    ...props.config
  };
  return (
    <div className={classes.SlideContainer}>
      <Slide {...properties}>
        {props.images.map(image => (
          <div className={classes.EachSlide} key={image}>
            <div style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default slideshow;
