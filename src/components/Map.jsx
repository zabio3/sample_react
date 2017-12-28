import React from 'react';

import PropTypes from 'prop-types';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(({ location , marker}) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={location}
    center={location}
  >
  {/*
    ...props.position は、positionの中のキーを展開するのと同じ働きをもつ
    */}
    <Marker {...marker} />
  </GoogleMap>
));

const Map = ({location}) => (
    <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className="map" />)}
      location={location}
      marker={{ location }}
    />
  );

Map.PropTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};


export default Map;
