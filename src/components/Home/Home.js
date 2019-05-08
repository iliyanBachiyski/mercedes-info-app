import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../../store/reducers/imageReducer/mapDispatchToProps";
import InfoCard from "../InfoCard/InfoCard";
import Slideshow from "../Slideshow/Slideshow";
import classes from "./Home.module.css";

class Home extends Component {
  state = {
    infoCardContent:
      "As a pioneer of the automobile, we seek innovations which provide for pleasant, safe and resource-friendly mobility, day in, day out. Discover our visionary ideas for vehicles, mobility concepts, e-mobility and digital networking of the future – as well as the solutions with which we are already shaping the present. With the CASE strategy, Daimler focuses on the four major trends influencing future mobility – Connected, Autonomous, Shared & Services and Electric. And Daimler is already making great progress in all of these fields to shape the future of mobility. Each of the four CASE fields in itself already changes mobility fundamentally."
  };

  componentDidMount() {
    this.props.fetchImages();
  }

  viewMore = () => {
    console.log("Clicked...");
  };

  render() {
    let slideShow = null;
    if (this.props.slideshowPhotos.length > 0) {
      slideShow = <Slideshow images={this.props.slideshowPhotos} />;
    } else {
      slideShow = <div>No images available!</div>;
    }
    return (
      <div className={classes.Home}>
        {slideShow}
        <InfoCard content={this.state.infoCardContent} click={this.viewMore} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    slideshowPhotos: state.slideshowPhotos
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
