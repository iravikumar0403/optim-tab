import axios from "axios";
import { useEffect, useState } from "react";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const onSuccess = async (pos) => {
      const { latitude, longitude } = pos.coords;
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      );
      setWeatherData(data);
    };
    const onError = (err) => {
      console.log(err);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  if (!weatherData) return "";

  const { weather, main } = weatherData;

  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].main}
        />
        <p className="text-2xl text-white m-0">
          {parseInt(main.temp - 273.15)} °C
        </p>
      </div>
      <p className="text-slate-300 text-lg ">{weather[0].description}</p>
    </>
  );
};
