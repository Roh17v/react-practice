import { useState } from "react";
import "./App.css";
import WeatherInjo from "./hooks/WeatherInjo";
import Card from "./components/Card/Card";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-violet-400 to-fuchsia-500">
        <SearchBox city={city} setCity={setCity} />
        {city && <Card city={city.toUpperCase()} />}
      </div>
    </>
  );
}

export default App;
