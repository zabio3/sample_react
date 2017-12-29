import React from 'react';
import PropTypes from 'prop-types';

const HotelRaw = ({ hotel }) => (
  <tr>
    <td><img src={hotel.thumbUrl} alt={hotel.name} /></td>
    <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
  </tr>
);

HotelRaw.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
  }).isRequired,
};

export default HotelRaw;
