const Details = () => {
  return (
    <>
      <div className="col-md-6 d-inline-block">
        <table className="table table-borderless table-sm mt-4">
          <tbody>
            <tr>
              <td>
                <strong>Wind</strong>
              </td>
              <td>
                <span id="wind">4.1</span> m/s
              </td>
            </tr>
            <tr>
              <td>
                <strong>Pressure</strong>
              </td>
              <td>
                <span id="pressure">1000</span> hpa
              </td>
            </tr>
            <tr>
              <td>
                <strong>Humidity</strong>
              </td>
              <td>
                <span id="humidity">88</span> %
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sunrise</strong>
              </td>
              <td>
                <span id="sunrise">00:00</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sunset</strong>
              </td>
              <td>
                <span id="sunset">00:00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Details;
