import Geocode from "react-geocode";

import { SET_COORDINATES } from "../types/geocodeTypes";

Geocode.setApiKey("AIzaSyAPpD6MEtXe6aj42FUQANeGsQ6VBriq9jA");

Geocode.setLanguage("ru");

Geocode.setRegion("ru");

Geocode.setLocationType("ROOFTOP");

// Geocode.enableDebug();

// Get latitude & longitude from address.

export const setCoordinates = (coordinates) => ({
  type: SET_COORDINATES,
  payload: coordinates,
});

export const getCoordinates = (address) => async (dispatch) => {
  //ADDRESS SHOULD BE IN PARAMATER.
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      const coordinates = { lat, lng };
      dispatch(setCoordinates(coordinates));
    },
    (error) => {
      console.error(error);
    }
  );
};


