import { useState } from "react";
import "./App.css";
import WeatherInjo from "./hooks/WeatherInjo";
import Card from "./components/Card/Card";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [city, setCity] = useState("");

  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/10838233/pexels-photo-10838233.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
          backgroundSize: "cover",
        }}
      >
        <SearchBox city={city} setCity={setCity} />
        {city && <Card city={city.toUpperCase()} />}
      </div>
    </>
  );
}

export default App;
