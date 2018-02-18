import React from 'react';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends React.Component {
    static defaultProps = {
        center: {lat: 53.3701668, lng: -2.9195765},
        zoom: 15
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyADAT64SMWOP7ee4cEOgW8tMYNL673MeDQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={53.3701668}
                    lng={-2.9195765}
                    text={'Liverpool Kendo Club'}
                />
            </GoogleMapReact>
        );
    }
}
export default SimpleMap;
