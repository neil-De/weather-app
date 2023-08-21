import moment from 'moment';
interface Props {
  data: any;
}
const Details = ({data}:Props) => {
  let wind = 0;
  let pressure = 0;
  let humidity = 0;
  let formatsunrise = new Date();
  let formatsunset = new Date();
  let sunrise = '00:00';
  let sunset = '00:00';

  if(data.api !==''){
    wind = data.wind.speed;
    pressure = data.main.pressure;
    humidity = data.main.humidity;
    formatsunrise = new Date(data.sys.sunrise);
    formatsunset = new Date(data.sys.sunset);
    sunrise =  moment(formatsunrise).format('hh:mm A');
    sunset =moment(formatsunset).format('hh:mm A'); 
    console.log(data.sys.sunrise);
  }

  return (
    <>
      <div className="col-md-4 d-inline-block">
        <table className="table table-borderless table-sm mt-4">
          <tbody>
            <tr>
              <td>
                <strong>Wind</strong>
              </td>
              <td>
                <span id="wind">{wind}</span> m/s
              </td>
            </tr>
            <tr>
              <td>
                <strong>Pressure</strong>
              </td>
              <td>
                <span id="pressure">{pressure}</span> hpa
              </td>
            </tr>
            <tr>
              <td>
                <strong>Humidity</strong>
              </td>
              <td>
                <span id="humidity">{humidity}</span> %
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sunrise</strong>
              </td>
              <td>
                <span id="sunrise">{sunrise}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sunset</strong>
              </td>
              <td>
                <span id="sunset">{sunset}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Details;
