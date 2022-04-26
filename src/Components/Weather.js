import { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { getGeoLocation } from "../utils/getGeoLocation";
import { getWeatherData } from "../utils/getWeatherData";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [editLocation, setEditLocation] = useState(false);
  const [locationInput, setLocationInput] = useState("");

  useEffect(() => {
    const location = localStorage.getItem("location");
    const onSuccess = async (pos) => {
      const data = await getWeatherData(pos, location);
      setWeatherData(data);
    };
    const onError = (err) => {
      console.log(err);
    };
    getGeoLocation(onSuccess, onError);
  }, []);

  if (!weatherData) return "";

  const { weather, main, name } = weatherData;

  const searchLocation = async () => {
    setEditLocation(false);
    if (locationInput === "") {
      const onSuccess = async (pos) => {
        const data = await getWeatherData(pos);
        setWeatherData(data);
      };
      const onError = (err) => {
        console.log(err);
      };
      getGeoLocation(onSuccess, onError);
    } else {
      localStorage.setItem("location", locationInput);
      const data = await getWeatherData("", locationInput);
      setWeatherData(data);
    }
    setLocationInput("");
  };

  return (
    <div className="group">
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
      <div>
        {editLocation ? (
          <div className="border rounded m-2">
            <input
              className="bg-transparent text-lg px-4 py-1 focus:outline-none"
              type="text"
              placeholder="Delhi, IN"
              onChange={(e) => {
                setLocationInput(e.target.value);
              }}
            />
            <button
              className="border-l p-3"
              title={locationInput ? "Search" : "Auto-Detect"}
              onClick={searchLocation}
            >
              {locationInput === "" ? (
                <BiCurrentLocation />
              ) : (
                <AiOutlineSearch />
              )}
            </button>
          </div>
        ) : (
          <>
            <p className="text-lg inline-block p-2">{name}</p>
            <button
              className="text-slate-200 hidden group-hover:inline-block"
              onClick={() => setEditLocation(true)}
            >
              <FiEdit3 />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
