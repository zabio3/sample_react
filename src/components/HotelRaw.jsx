import React from 'react';
import PropTypes from 'prop-types';

const HotelRaw = ({ hotel }) => (
  <tr>
    <th><a href={hotel.url} target="_blank">{hotel.name}</a></th>
  </tr>
);

HotelRaw.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default HotelRaw;
