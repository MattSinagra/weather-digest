import React from 'react';


const API_KEY = "991ec47f9c2fd0f3b3aa8195f730946f";
// const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;



export default class Forecast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        source: [],
        location: '',
        weatherLoc: '',
        wind: []
      };
    }

    pullData = async () => {
      const apiCall =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Brisbane,Australia&appid=991ec47f9c2fd0f3b3aa8195f730946f&units=metric`)
      const data = await apiCall.json();
      this.setState({
        source: data,
        isLoaded: true,
        weatherLoc: data.name,
        weather: data.weather,
        wind: data.wind
      })
    }

  
    componentDidMount() {
      this.pullData();
    }
  
    render() {
      const { error, isLoaded, weatherLoc, weather, wind } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        
        return (
          <div> 
          {weatherLoc} 
          </div>
          
          
        );
      }
    }
  }

  export { Forecast }