function WeatherCard({
  city,
  temperature,
  weatherDescription,
}) {
  return (
    <div className="weather-card">

      <h2>{city}</h2>

      <div className="weather-icon">
        🌤️
      </div>

      <h1>
        {temperature}°C
      </h1>

      <p>
        {weatherDescription}
      </p>

    </div>
  );
}

export default WeatherCard;