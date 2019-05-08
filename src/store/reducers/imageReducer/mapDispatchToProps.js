import * as actions from "../../actions/actionTypes";

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: () => dispatch(actions.fetchImages())
  };
};

export default mapDispatchToProps;
