import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import WeatherCard from "./components/WeatherCard";

import './App.css';

function App(){
  const [city ,setCity] = useState("");
  const [weather , setWeather ] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error , setError] = useState("");

  const searchWeather = async () =>{
    try{
      setLoading(true);
      setError("");
      setWeather(null);

      // Step :1
      const locationResponse = await fetch(
  `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=1&language=en&format=json`
);

        const locationData = 
        await locationResponse.json();

        if(!locationData.results || locationData.results.length === 0){
          setError("City not found ");
          setLoading(false);
          return;
        }

        const location = locationData.results[0];

        const latitude = location.latitude;

        const longitude = location.longitude;

        // step 2

        const weatherResponse = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
);

        const weatherData = await weatherResponse.json();
        
        setWeather({
          city:location.name,

           temperature:
            weatherData.current
            .temperature_2m,

          humidity:
            weatherData.current.relative_humidity_2m,

          windSpeed:
            weatherData.current.wind_speed_10m,

          weatherCode:
            weatherData.current.weather_code,
        });

    }catch(error){
      console.log(error);

      setError("Something went wrong. Please try again.");

    }finally{
      setLoading(false);
    }
  };

  // Weather description

  const getWeatherDescription = (
    code
  ) => {
    if( code === 0 ){
      return "Clear Sky";
    }

    if(code == 1 || code === 2 || code === 3){
      return "Partly Cloudy";
    }
    if(
      code >= 51 && code <=67
    ){
      return "Rain"
    }

    if(code >=71 && code <= 77){
      return "Snow";
    }

    if(code >= 80 && code <= 82){
      return "Rain Showers"
    }

    if(code >=95){
      return "Thunderstorm";
    }

    return "Unknown"
  };

  
  return(
    <div className="app">
        <h1>🌤️ Weather App</h1>

        <SearchBar city={city} setCity={setCity} onSearch={searchWeather}/>

       {/* Loading */}
        
       {loading && (
        <p className="loading">Loading weather...</p>
       )}

       {/* error */}
       {error && (
        <p className="error">{error}</p>
       )}


       {/* Weather */}

       {weather && !loading &&(
        <>
        <WeatherCard city={weather.city}
        temperature={weather.temperature}
        weatherDescription={getWeatherDescription(weather.weatherCode)} />

        <WeatherDetails humidity={weather.humidity}
        windSpeed={weather.windSpeed}/>
        </>
       )}
       
        
    </div>
  )


}

export default App;