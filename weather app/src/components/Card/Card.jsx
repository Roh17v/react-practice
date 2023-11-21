import React from "react";

import WeatherInjo from "../../hooks/WeatherInjo";
import styles from "./Card.module.css";

import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherWindyCloudy,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSnow,
} from "react-icons/ti";

import {
  FaRegMoon,
  FaCloudMoonRain,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import { IoIosWater } from "react-icons/io";

import { RiMistFill } from "react-icons/ri";

import { FaCloudMoon } from "react-icons/fa6";

function Card({ city }) {
  const data = WeatherInjo(city);

  function mpsToKmph(mps) {
    const kmPerMeter = 0.001;
    const hoursPerSec = 1 / 3600;
    const kmph = (mps * kmPerMeter) / hoursPerSec;
    return Math.round(kmph);
  }

  const date = new Date();

  const day = date.toLocaleString("default", { weekday: "long" }).toUpperCase();

  const today = date.toLocaleDateString();

  const iconCodes = {
    "01d": <TiWeatherSunny color="white" strokeWidth={0.01} fontSize={150} />,
    "02d": (
      <TiWeatherPartlySunny color="white" strokeWidth={0.01} fontSize={150} />
    ),
    "03d": <TiWeatherCloudy color="white" strokeWidth={0.01} fontSize={150} />,
    "04d": (
      <TiWeatherWindyCloudy color="white" strokeWidth={0.01} fontSize={150} />
    ),
    "09d": <TiWeatherShower color="white" strokeWidth={0.01} fontSize={150} />,
    "10d": <TiWeatherShower color="white" strokeWidth={0.01} fontSize={150} />,
    "11d": <TiWeatherStormy color="white" strokeWidth={0.01} fontSize={150} />,
    "13d": <TiWeatherSnow color="white" strokeWidth={0.01} fontSize={150} />,
    "50d": <RiMistFill color="white" strokeWidth={0.01} fontSize={150} />,
    "01n": <FaRegMoon color="white" strokeWidth={0.001} fontSize={150} />,
    "02n": <FaCloudMoon color="white" strokeWidth={0.01} fontSize={150} />,
    "03n": <TiWeatherCloudy color="white" strokeWidth={0.01} fontSize={150} />,
    "04n": (
      <TiWeatherWindyCloudy color="white" strokeWidth={0.01} fontSize={150} />
    ),
    "09n": <TiWeatherShower color="white" strokeWidth={0.01} fontSize={150} />,
    "10n": <FaCloudMoonRain color="white" strokeWidth={0.01} fontSize={150} />,
    "11n": <TiWeatherStormy color="white" strokeWidth={0.01} fontSize={150} />,
    "13n": <TiWeatherSnow color="white" strokeWidth={0.01} fontSize={150} />,
    "50n": <RiMistFill color="white" strokeWidth={0.01} fontSize={150} />,
  };

  return (
    <div className="flex justify-center mt-10 flex-nowrap">
      <div className="bg-white bg-opacity-10 backdrop-blur w-[550px] h-auto rounded-lg shadow-lg">
        <div className="p-4">
          <div>
            <div className="flex justify-between flex-nowrap">
              <div
                className={`text-4xl text-[white] ${styles["font-text"]} font-[700]`}
              >
                {city}
              </div>
              <div className="my-auto flex">
                <div
                  className={`text-white text-lg ${styles["font-text"]} font-light flex `}
                >
                  <FaArrowDown size={20} className="my-auto" />
                  {data.main ? Math.round(data.main.temp_min) : null}°
                </div>
                <div
                  className={`text-white text-lg ${styles["font-text"]} font-light flex`}
                >
                  <FaArrowUp size={20} className="my-auto" />
                  {data.main ? Math.round(data.main.temp_max) : null}°
                </div>
              </div>
            </div>
            <div className="flex pt-2 justify-between flex-nowrap">
              <div className=" basis-1/4">
                <div
                  className={`text-white text-xl ${styles["font-text"]} font-light`}
                >
                  {day}
                </div>
                <div
                  className={`text-white text-xl ${styles["font-text"]} font-light`}
                >
                  {today}
                </div>
                <div
                  className={`text-white text-xl ${styles["font-text"]} font-light`}
                >
                  Wind: {data.main ? mpsToKmph(data.wind.speed) : null}km/h
                </div>
                <div
                  className={`text-white text-xl ${styles["font-text"]} font-light flex`}
                >
                  <IoIosWater size={20} className="my-auto" />
                  <div
                    className={`text-white text-xl ${styles["font-text"]} font-light flex`}
                  >
                    {data.main ? data.main.humidity : null}%
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-center basis-1/2">
                <div className="flex justify-center">
                  {data.weather ? iconCodes[data.weather[0].icon] : null}
                </div>
                <div
                  className={`text-white text-3xl ${styles["font-text"]} font-light flex justify-center `}
                >
                  {data.weather
                    ? data.weather[0].description.toUpperCase()
                    : null}
                </div>
              </div>
              <div
                className={`text-white ${styles["font-text"]} font-[700] text-6xl text-center basis-1/4 relative`}
              >
                <div className="absolute h-[40%] top-10 left-0">
                  {data.main ? Math.round(data.main.temp) : null}°C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
