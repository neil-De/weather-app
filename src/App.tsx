import React, { useState } from "react";
import Temperature from "./components/Temperature";
import Details from "./components/Details";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleKeyDown = (e: any) => {
    console.log(searchValue);
  };
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="container">
      <h1 className="font-weight-bold text-center mb-3">React Weather App</h1>
      <div className="form-group mb-3">
        <Temperature data={searchValue} />
        <Details />
      </div>
      <div className="input-group flex-nowrap mt-1">
        <input
          type="text"
          className="form-control"
          placeholder="Search City"
          aria-label="Search City"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleKeyDown}
        >
          Use location
        </button>
      </div>
    </div>
  );
}
export default App;
