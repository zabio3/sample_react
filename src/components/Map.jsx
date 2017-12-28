import React from 'react';

import PropTypes from 'prop-types';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.position}
    center={props.position}
  >
  </GoogleMap>
));

const Map = ({lat, lng}) => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div className="map" />)}
    position={{ lat, lng}}
  />
);

Map.PropTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.defaultProps = {
  lat:35.6585805,
  lng:139.7454329,
};

export default Map;
