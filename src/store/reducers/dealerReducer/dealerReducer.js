import * as actions from "../../actions/actionConst";

const initialState = {
  dealer: {},
  nextPage: ""
};

const dealerReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case actions.FETCH_DEALERS:
      newState = {
        ...state,
        dealer: action.payload.dealers[0],
        nextPage: action.payload._links.next.href
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default dealerReducer;
