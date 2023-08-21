interface Props {
  data: any;
}
const Temperature = ({ data }: Props) => {
  let icon = "10d";
  let location = "Cebu City";
  let desc = '';
  let temp = 0;
  let country = 'PH';
 
  if(data.api !==''){
    icon =  "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    location =  data.name;
    desc =  data.weather[0].description;
    temp = data.main.temp - 273.15;
    country = data.sys.country;
  }

  return (
    <>
      <div className="col-md-7 d-inline-block">
        <img id="icon" src={icon} />
        <h4>
          <span id="location">{location}</span>, <span id="country">{country}</span>
        </h4>
        <p id="description">{desc}</p>
        <h1>
          <span id="temp">{temp.toFixed(2)} </span> &#8451;
        </h1>
      </div>
    </>
  );
};
export default Temperature;
