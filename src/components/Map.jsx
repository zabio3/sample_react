import React from 'react';

import PropTypes from 'prop-types';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// ...props.position は、positionの中のキーを展開するのと同じ働きをもつ
const InnerMap = withGoogleMap(({ location, marker }) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={location}
    center={location}
  >
    <Marker {...marker} />
  </GoogleMap>
));

const Map = ({ location }) => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div className="map" />)}
    location={location}
    marker={{ position: location }}
  />
);

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Map;
