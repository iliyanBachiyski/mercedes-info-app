import * as actions from "./actionConst";
import { DEALERS_DATA } from "../../data/dealers";
import {
  IMAGE_URL,
  COMPONENTS_IMAGE_URL,
  IMAGE_BY_VIN_URL,
  VIN_REPLACE_PATTERN
} from "../../API_CONFIG";

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

export const fetchDealers = () => {
  return dispatch => {
    dispatch(dealersActionCreator(DEALERS_DATA));
    // Dispatching some hardcoded data because of restriction from the API
    /*     fetch(DEALER_URL, {
      headers: new Headers({ accept: "application/json" })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch(dealersActionCreator(data));
      }); */
  };
};

const dealersActionCreator = data => {
  return {
    type: actions.FETCH_DEALERS,
    payload: data
  };
};

export const searchVehicleByVIN = vinNumber => {
  return dispatch => {
    const fullImageURL = IMAGE_BY_VIN_URL.replace(
      VIN_REPLACE_PATTERN,
      vinNumber
    );
    const componentsImageURL = COMPONENTS_IMAGE_URL.replace(
      VIN_REPLACE_PATTERN,
      vinNumber
    );

    const fullImagePromise = fetch(fullImageURL).then(resp => resp.json());
    const componentsImagePromise = fetch(componentsImageURL).then(resp =>
      resp.json()
    );

    Promise.all([fullImagePromise, componentsImagePromise])
      .then(values => {
        dispatch(searchVehicleResponseActionCreator(values, null));
      })
      .catch(err => dispatch(searchVehicleResponseActionCreator(null, err)));
  };
};

const searchVehicleResponseActionCreator = (response, error) => {
  return {
    type: actions.SEARCH_VEHICLE_RESPONSE,
    payload: {
      response,
      error
    }
  };
};
