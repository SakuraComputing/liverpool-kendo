import React from 'react';

import GoogleMapReact from 'google-map-react';

const DojoLocation = ({ text }) => (
    <div className="map-pointer map-pointer-pulse">
        {text}
    </div>
);

const LAT = 53.3707973, LNG = -2.9188403;

export class SimpleMap extends React.Component {
    static defaultProps = {
        center: {lat: LAT, lng: LNG},
        zoom: 16
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyADAT64SMWOP7ee4cEOgW8tMYNL673MeDQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}

            >
                <DojoLocation
                    lat={LAT}
                    lng={LNG}
                />
            </GoogleMapReact>
        );
    }
}
export default SimpleMap;
