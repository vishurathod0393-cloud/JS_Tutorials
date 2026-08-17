function WeatherDetails({
  humidity,
  windSpeed,
}) {
  return (
    <div className="weather-details">

      <div className="detail">
        <span>💧</span>

        <p>Humidity</p>

        <strong>
          {humidity}%
        </strong>
      </div>

      <div className="detail">
        <span>💨</span>

        <p>Wind Speed</p>

        <strong>
          {windSpeed} km/h
        </strong>
      </div>

    </div>
  );
}

export default WeatherDetails;