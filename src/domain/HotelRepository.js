import Rakuten from '../lib/Rakuten';

const config = require('../../config.env');

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: config.RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then((result) => {
      console.log('楽天トラベル ホテル検索');
      console.log(result);
    });
};
