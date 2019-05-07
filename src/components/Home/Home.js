import React, { Component } from "react";
import InfoCard from "../InfoCard/InfoCard";
import Slideshow from "../Slideshow/Slideshow";
import classes from "./Home.module.css";

class Home extends Component {
  intervalId = null;

  state = {
    infoCardContent:
      "As a pioneer of the automobile, we seek innovations which provide for pleasant, safe and resource-friendly mobility, day in, day out. Discover our visionary ideas for vehicles, mobility concepts, e-mobility and digital networking of the future – as well as the solutions with which we are already shaping the present. With the CASE strategy, Daimler focuses on the four major trends influencing future mobility – Connected, Autonomous, Shared & Services and Electric. And Daimler is already making great progress in all of these fields to shape the future of mobility. Each of the four CASE fields in itself already changes mobility fundamentally.",
    slideshowPhotos: [
      "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXq0SeqtyO35PobzIvxXrItvsTQKkojUfGoo7GE11KFm9ehP9Q6FjcBXBrjXGEZGjJ0l30fOB2Ng1bApjkCI5uVmMQC3qSpkzNRJwm7jxamhKV1HV%25vqw8cyLRDcHYaxWXJrH1dJZn8wf8noiZEkXM4FlmuTg92hV6PDp1pSeWuwRtsd3kQcUfgLkXGEPadJ0le6lOB2sS1bApUIwI5uLoxQC3aCpkzNHPbm7j8yZhKViYh%25vq4JTyLRgOFYaxPrSrH1yC%25n8wYhfoiZrtpM4FACFTg95vO6PDakqSeWHKutsd8vtcUfiM6XGE4TXJ0lg6AOB2PSFbApeIXI5usr2QC32C7kzNpPdm7juy3hKV3pN%25vq8JTyLRiOXYax4JOroYhfld7SbAp8AyI5ui5IQC34gWkzNeUDm7jspIhKVI0F%25vqDUcyLRWAEYaxdNlrH1LJOn8wa8woiZH5oM4F8KPTg9itk6PD4%25DSeWqmItsdRYdcUfG%25kXGE0GjJ0lB0tOB2AWqbAp5d9I5uCcDQC3zkFkzN9l6m7sDgubYwR9hDvQ9t%25Nj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BI1,PZM",
      "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXq0SeqtyO35PobzIvxXrItvsTQKkojUfGoo7GE11KFm9ehP9Q6FjcBXBrjXGEZGjJ0l30fOB2Ng1bApjkCI5uVmMQC3qSpkzNRJwm7jxamhKV1HV%25vqw8cyLRDcHYaxWXJrH1dJZn8wf8noiZEkXM4FlmuTg92hV6PDp1pSeWuwRtsd3kQcUfgLkXGEPadJ0le6lOB2sS1bApUIwI5uLoxQC3aCpkzNHPbm7j8yZhKViYh%25vq4JTyLRgOFYaxPrSrH1yC%25n8wYhfoiZrtpM4FACFTg95vO6PDakqSeWHKutsd8vtcUfiM6XGE4TXJ0lg6AOB2PSFbApeIXI5usr2QC32C7kzNpPdm7juy3hKV3pN%25vq8JTyLRiOXYax4JOroYhfld7SbAp8AyI5ui5IQC34gWkzNeUDm7jspIhKVI0F%25vqDUcyLRWAEYaxdNlrH1LJOn8wa8woiZH5oM4F8KPTg9itk6PD4%25DSeWqmItsdRYdcUfG%25kXGE0GjJ0lB0tOB2AWqbAp5d9I5uCcDQC3zkFkzN9l6m7sDgubYwR9hDvQ9t%25Nj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BE020,PZM"
    ],
    currentPhoto: {
      index: 0,
      alt: ""
    }
  };

  componentDidMount() {
    this.startSlideShowInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startSlideShowInterval() {
    const photosLength = this.state.slideshowPhotos.length - 1;
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

  viewMore = () => {
    console.log("Clicked...");
  };
  render() {
    const image = {
      url: this.state.slideshowPhotos[this.state.currentPhoto.index],
      alt: this.state.currentPhoto.alt
    };
    return (
      <div className={classes.Home}>
        <Slideshow image={image} />
        <InfoCard content={this.state.infoCardContent} click={this.viewMore} />
      </div>
    );
  }
}

export default Home;
