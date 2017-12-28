import React from 'react';
import PropTypes from 'prop-types';

// propsを省略可能
const GeoCodeResult = ({address, location }) => (
  <ul className="geocode-result">
    <li>住所: {address}</li>
    <li>緯度: {location.lat}</li>
    <li>軽度: {location.lng}</li>
  </ul>
);

GeoCodeResult.PropTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

GeoCodeResult.defaultProps = {
  address: '',
}

export default GeoCodeResult;
