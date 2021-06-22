import React from 'react';

import GoogleMapReact from 'google-map-react';

import { LAT, LNG, ZOOM } from '../config';

const DojoLocation = ({ text }) => (
  <div className="map-pointer map-pointer-pulse">{text}</div>
);

export class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: LAT, lng: LNG },
    zoom: ZOOM,
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyADAT64SMWOP7ee4cEOgW8tMYNL673MeDQ' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <DojoLocation lat={LAT} lng={LNG} />
      </GoogleMapReact>
    );
  }
}
export default SimpleMap;
