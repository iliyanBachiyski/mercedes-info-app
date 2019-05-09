import * as actionTypes from "../../actions/actionTypes";

const mapDispatchToProps = dispatch => {
  return {
    searchByVIN: vinNumber =>
      dispatch(actionTypes.searchVehicleByVIN(vinNumber))
  };
};

export default mapDispatchToProps;
