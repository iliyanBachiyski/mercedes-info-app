import React, { Component } from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../../store/reducers/searchReducer/mapDispatchToProps";
import SearchBar from "./SearchBar/SearchBar";
import Slideshow from "../Slideshow/Slideshow";
import classes from "./Search.module.css";

class Search extends Component {
  submitSearchHandler(vinNumber) {
    this.props.searchByVIN(vinNumber);
  }

  render() {
    let response = null;
    if (this.props.error) {
      response = <div>Error</div>;
    } else if (
      this.props.fullImagesArray.length > 0 ||
      this.props.componentImagesArray.length > 0
    ) {
      response = (
        <div className={classes.Search}>
          <div className={classes.Container}>
            <Slideshow
              images={[
                ...this.props.fullImagesArray,
                ...this.props.componentImagesArray
              ]}
              config={{ duration: 3000, arrows: true }}
            />
          </div>
        </div>
      );
    }
    return (
      <div className={classes.SearchContainer}>
        <SearchBar
          placeholder="Search by VIN..."
          click={this.submitSearchHandler.bind(this)}
        />
        {response}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullImagesArray: state.searchRed.fullImagesArray,
    componentImagesArray: state.searchRed.componentImagesArray,
    error: state.searchRed.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
