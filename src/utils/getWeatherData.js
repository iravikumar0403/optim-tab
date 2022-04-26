import axios from "axios";

export const getWeatherData = async (pos, query) => {
  let apiUrl;
  if (query) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`;
  } else {
    const { latitude, longitude } = pos.coords;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`;
  }
  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {}
};
