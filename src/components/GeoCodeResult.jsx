import React, { PropTypes } from 'react';

// propsを省略可能
const GeoCodeResult = ({address, lat, lng }) => (
  <ul className="geocode-result">
    <li>住所: {address}</li>
    <li>緯度: {lat}</li>
    <li>軽度: {lng}</li>
  </ul>
);

GeoCodeResult.PropTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

GeoCodeResult.defaultProps = {
  address: '',
  lat: 0,
  lng: 0,
}

export default GeoCodeResult;
