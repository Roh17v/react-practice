import React, { useEffect, useState } from "react";

function WeatherInjo(city) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=61ad125c2a460a8bb6a801bfb31b2e8a`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [city]);
  return data;
}

export default WeatherInjo;
