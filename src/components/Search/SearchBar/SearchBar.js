import React, { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = props => {
  const [inputObject, setInputValue] = useState({ inputValue: "" });
  const submitSearchHandler = () => {
    props.click(inputObject.inputValue);
    setInputValue({ inputValue: "" });
  };
  return (
    <div className={classes.SearchBarContainer}>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={event =>
          setInputValue({ inputValue: event.target.value.toUpperCase() })
        }
        value={inputObject.inputValue}
      />
      <button onClick={submitSearchHandler}>
        <i className="fa fa-search" />
      </button>
    </div>
  );
};

export default SearchBar;
