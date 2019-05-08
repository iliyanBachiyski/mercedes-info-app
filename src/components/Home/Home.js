import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../../store/reducers/imageReducer/mapDispatchToProps";
import InfoCard from "../InfoCard/InfoCard";
import Slideshow from "../Slideshow/Slideshow";
import classes from "./Home.module.css";

class Home extends Component {
  intervalId = null;

  state = {
    infoCardContent:
      "As a pioneer of the automobile, we seek innovations which provide for pleasant, safe and resource-friendly mobility, day in, day out. Discover our visionary ideas for vehicles, mobility concepts, e-mobility and digital networking of the future – as well as the solutions with which we are already shaping the present. With the CASE strategy, Daimler focuses on the four major trends influencing future mobility – Connected, Autonomous, Shared & Services and Electric. And Daimler is already making great progress in all of these fields to shape the future of mobility. Each of the four CASE fields in itself already changes mobility fundamentally.",
    currentPhoto: {
      index: 0
    }
  };

  componentDidMount() {
    this.props.fetchImages();
  }

  componentDidUpdate() {
    if (this.props.slideshowPhotos.length > 0 && !this.intervalId) {
      this.startSlideShowInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startSlideShowInterval() {
    const photosLength = this.props.slideshowPhotos.length - 1;
    if (photosLength > 0) {
      this.intervalId = setInterval(() => {
        if (this.state.currentPhoto.index < photosLength) {
          this.setState(prevState => {
            this.setState({
              currentPhoto: {
                ...prevState.currentPhoto,
                index: prevState.currentPhoto.index + 1
              }
            });
          });
        } else {
          this.setState(prevState => {
            this.setState({
              currentPhoto: { ...prevState.currentPhoto, index: 0 }
            });
          });
        }
      }, 5000);
    }
  }

  viewMore = () => {
    console.log("Clicked...");
  };

  render() {
    let url = null;
    let slideShow = null;
    if (this.props.slideshowPhotos.length > 0) {
      url = this.props.slideshowPhotos[this.state.currentPhoto.index];
      slideShow = <Slideshow url={url} />;
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
