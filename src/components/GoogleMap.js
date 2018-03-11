import React from 'react';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
<div className="map-pointer">
    {text}
    </div>
);

const LAT = 53.371035, LNG = -2.918652;

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
                <AnyReactComponent
                    lat={LAT}
                    lng={LNG}
                    text={'Liverpool Kendo Club'}
                />
            </GoogleMapReact>
        );
    }
}
export default SimpleMap;
