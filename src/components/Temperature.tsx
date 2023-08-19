interface Props {
  data: string;
}
const Temperature = ({ data }: Props) => {
  return (
    <>
      <div className="col-md-6 d-inline-block">
        <img id="icon" src="http://openweathermap.org/img/w/10d.png" />
        <h4>
          <span id="location">Cebu City</span>, <span id="country">PH</span>
        </h4>
        <p id="description">Overcast clouds</p>
        <h1>
          <span id="temp">20 </span> &#8451;
        </h1>
      </div>
    </>
  );
};
export default Temperature;
