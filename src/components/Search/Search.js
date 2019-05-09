import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./Search.module.css";

class Search extends Component {
  submitSearchHandler(text) {
    console.log(text);
  }
  render() {
    return (
      <div className={classes.SearchContainer}>
        <SearchBar
          placeholder="Search by VIN..."
          click={this.submitSearchHandler}
        />
      </div>
    );
  }
}

export default Search;
