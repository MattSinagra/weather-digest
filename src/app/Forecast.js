import React from 'react';

export default class Forecast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        latlong: ''
      };
    }

    getGeodata() {
        if (navigator.geolocation) {
            // Request the current position
            // If successful, call getPosSuccess; On error, call getPosErr
            navigator.geolocation.getCurrentPosition(this.getPosSuccess, this.getPosErr);
        } else {
            alert('geolocation not available?! What year is this?');
            // IP address or prompt for city?
        }
        
    }

    getPosSuccess(pos) {
        // Get the coordinates and accuracy properties from the returned object
        var geoLat = pos.coords.latitude.toFixed(5);
        var geoLng = pos.coords.longitude.toFixed(5);
        var geoAcc = pos.coords.accuracy.toFixed(1);
        

    }

    getPosErr(err) {
        switch (err.code) {
          case err.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case err.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          default:
            alert("An unknown error occurred.");
        }
      }

  
    componentDidMount() {
      this.getGeodata();
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {/* {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))} */}
          </ul>
        );
      }
    }
  }

  export { Forecast }