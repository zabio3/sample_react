import React from 'react';
import PropTypes from 'prop-types';

// propsを省略可能
const GeocodeResult = ({ address, location }) => (
  <ul className="geocode-result">
    <li>住所: {address}</li>
    <li>緯度: {location.lat}</li>
    <li>軽度: {location.lng}</li>
  </ul>
);

GeocodeResult.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

GeocodeResult.defaultProps = {
  address: '',
};

export default GeocodeResult;
