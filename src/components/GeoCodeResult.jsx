import React from 'react';
import PropTypes from 'prop-types';

const GeocodeResult = ({ address, location }) => (

  <ul className="geocode-result">
    <ul className="geocode-result">
      <label>住所</label>
      <li>　{address}</li>
    </ul>
    <ul className="geocode-result">
      <label>緯度</label>
      <li>　{location.lat}</li>
    </ul>
    <ul className="geocode-result">
      <label>経度</label>
      <li>　{location.lng}</li>
    </ul>
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
