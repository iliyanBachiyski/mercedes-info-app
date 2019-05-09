import * as actions from "../../actions/actionConst";

const initialState = {
  fullImagesArray: [],
  componentImagesArray: [],
  error: null
};

const searchReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case actions.SEARCH_VEHICLE_RESPONSE:
      if (action.payload.response.error) {
        newState = {
          ...state,
          error: action.payload.response.error,
          fullImagesArray: null,
          componentImagesArray: null
        };
      } else {
        const fullImagesArray = filterFullImagesResponse(
          action.payload.response[0]
        );
        const componentImagesArray = filterComponentImagesResponse(
          action.payload.response[1]
        ).slice(0, 15);
        newState = { ...state, fullImagesArray, componentImagesArray };
      }
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

const filterFullImagesResponse = images => {
  const imageUrls = [];
  for (let key in images.vehicle) {
    const obj = images.vehicle[key];
    imageUrls.push(obj.url);
  }
  return imageUrls;
};

const filterComponentImagesResponse = images => {
  const imageUrls = [];
  for (let key in images.components) {
    const obj = images.components[key];
    if (obj.url) {
      imageUrls.push(obj.url);
    } else {
      for (let key in obj) {
        if (obj[key].urls) {
          obj[key].urls.forEach(elem => {
            imageUrls.push(elem);
          });
        } else {
          imageUrls.push(obj[key].url);
        }
      }
    }
  }
  return imageUrls;
};

export default searchReducer;
