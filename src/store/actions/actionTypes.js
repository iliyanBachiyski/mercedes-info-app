import * as actions from "./actionConst";
import { IMAGE_URL } from "../../API_CONFIG";

export const fetchImages = () => {
  return dispatch => {
    fetch(IMAGE_URL)
      .then(resp => resp.json())
      .then(data => {
        dispatch(imagesActionCreator(data));
      });
  };
};

const imagesActionCreator = data => {
  return {
    type: actions.FETCH_IMAGES,
    payload: data
  };
};
