import React, { Component } from "react";
import Dealer from "./Dealer/Dealer";
import mapDispatchToProps from "../../store/reducers/dealerReducer/mapDispatchToProps";
import { connect } from "react-redux";
import classes from "./Dealers.module.css";

class Dealers extends Component {
  componentDidMount() {
    this.props.fetchDealers();
  }
  render() {
    return (
      <div className={classes.Dealers}>
        <div className={classes.Header}>
          <div className={classes.Title}>{this.props.dealer.legalName}</div>
          <div className={classes.ImageContainer}>
            <img alt="Logo" src="../../assets/images/logo.png" />
          </div>
        </div>
        <Dealer dealer={this.props.dealer} />
        <button>Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dealer: state.dealerRed.dealer,
    nextPage: state.dealerRed.nextPage
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dealers);
