import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div >
    {text}
    <i style ={{fontSize: '35px', color: 'red'}} className="fas fa-map-marker-alt"></i>
  
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.433190,
      lng: -99.165240
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height:   '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCrWp2rIpEyBROsXIGdL4W3hYNtCTL5zKM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.433190}
            lng={-99.165240}
            text={'TCS'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;