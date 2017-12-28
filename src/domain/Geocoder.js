import axios from 'axios';
const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

// データをもらって整形する処理をAppから逃がすため
export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then((results) => {
      const data = results.data;
      const status = data.status;
      const result = data.results[0];

      if (typeof result == 'undefined') {
        return { status };
      } else {
        const address =  result.formatted_address;
        const location = result.geometry.location;
        return { status, address, location };
      }

});


export const reverseGeoCode = () => null;
