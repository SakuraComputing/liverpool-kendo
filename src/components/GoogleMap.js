import React from 'react';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends React.Component {
    static defaultProps = {
        center: {lat: 53.42, lng: -2.85},
        zoom: 11
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyADAT64SMWOP7ee4cEOgW8tMYNL673MeDQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={53.4202046}
                    lng={-2.8549682}
                    text={'Egg Dance studio'}
                />
            </GoogleMapReact>
        );
    }
}
export default SimpleMap;
