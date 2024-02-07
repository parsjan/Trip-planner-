import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '40%',
      height: '700 px',
    };
    console.log(this.props.lat,this.props.lan);
    const lat=parseFloat(this.props.lat.$numberDecimal)
    const lan=parseFloat(this.props.lan.$numberDecimal)
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={{
          lat:lat, // Initial map center latitude
          lng: lan, // Initial map center longitude
        }}
        zoom={10} // Initial zoom level
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIBtQ9KaoiOqo5UzKL6TlhtWl2e7k_FsE', 
})(MapContainer);