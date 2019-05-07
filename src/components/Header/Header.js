import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={classes.Active}>
            <NavLink activeClassName={classes.Active} to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.Active} to="/dealer">
              Dealer
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.Active} to="/gallery">
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
