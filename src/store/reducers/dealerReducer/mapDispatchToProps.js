import * as actions from "../../actions/actionTypes";

const mapDispatchToProps = dispatch => {
  return {
    fetchDealers: () => dispatch(actions.fetchDealers())
  };
};

export default mapDispatchToProps;
