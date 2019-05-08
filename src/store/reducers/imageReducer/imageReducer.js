import * as actions from "../../actions/actionConst";

const initialState = {
  slideshowPhotos: []
};

const imageReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case actions.FETCH_IMAGES:
      newState = {
        ...state,
        slideshowPhotos: filterImagesResponse(action.payload)
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

const filterImagesResponse = images => {
  const imageUrls = [];
  for (let key in images.vehicle) {
    const obj = images.vehicle[key];
    imageUrls.push(obj.url);
  }
  return imageUrls;
};

export default imageReducer;
