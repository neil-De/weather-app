import React, { useState,useEffect } from "react";
import Temperature from "./components/Temperature";
import Details from "./components/Details";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [location,setLocation] = useState([]);
  const [cordinates, setCoordinates] = useState({lat:10.315699,lng:123.885437});
  const [temperatureData,setTemperatureData] = useState({search:"",api:""});
  const [detailsData,setDetailsData] = useState({search:"",api:""});

  //you can get api key from open weather api
  const API_KEY = import.meta.env.VITE_API_KEY;
 

  useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          setCoordinates({lat:position.coords.latitude,lng:position.coords.longitude});
      });
    }

   getWeather(cordinates.lat,cordinates.lng);
  },[]);

  const handleKeyDown = (e: any) => {
    fetchLocation(searchValue);
  };

  const getWeather = (lat:any,lng:any) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`).
    then(response=>response.json()).
    then((json)=>{setTemperatureData(json); setDetailsData(json);}); 
  }

  const fetchLocation = (location:string) =>{
     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`).
     then(response=>response.json()).
     then((json)=>{
      setLocation(json);
      if(json.length > 0){
        getWeather(json[0].lat,json[0].lon);
      }
    }); 
  }
 
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="container">
      <h1 className="font-weight-bold text-center mb-3">React Weather App</h1>
      <div className="form-group mb-3">
        <Temperature data={temperatureData} />
        <Details data={detailsData} />
      </div>
      <div className="input-group flex-nowrap">
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
