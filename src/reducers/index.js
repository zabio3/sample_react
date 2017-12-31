import { combineReducers } from 'redux';
import queryString from 'query-string';

const getPlaceParam = () => {
  const params = queryString.parse(location.search);
  const place = params.place;
  if (place && place.length > 0) {
    return place;
  }
  return null;
}

const place = (state = getPlaceParam() || '東京ドーム', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;
    default:
      return state;
  }
};

const hotels = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HOTELS':
      return action.hotels;
    default:
      return state;
  }
};

const sortKey = (state = 'price', action) => {
  switch (action.type) {
    case 'CHANGE_SORT_KEY':
      return action.sortKey;
    default:
      return state;
  }
};

const geocodeResult = (
  state = {
    address: '',
    location: {
      lat: 35.7056396,
      lng: 139.7518913,
    },
  },
  action,
) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return {
        address: action.address,
        location: action.location,
      };
    case 'CHANGE_ERROR_MESSAGE':
      return {
        address: action.message,
        location: { lat: 0, lng: 0 },
      };
    default:
      return state;
  }
};

export default combineReducers({ place, geocodeResult, hotels, sortKey });
