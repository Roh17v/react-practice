import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./SearchBox.module.css";

function SearchBox({ city, setCity }) {
  const [location, setLocation] = useState("");
  return (
    <div className="flex justify-center pt-40">
      <input
        className="border-2 border-gray-300 rounded rounded-r-none w-[600px] py-2 px-4 text-gray-700"
        placeholder="Enter City Name"
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <button
        className={`bg-white rounded-md px-4 py-2 rounded-l-none ${styles.button}`}
        onClick={() =>
         setCity(location)
        }
      >
        <IoSearch size={20} />
      </button>
    </div>
  );
}

export default SearchBox;
