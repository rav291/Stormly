import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

const HomeScreen = ({ city }) => {
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=36090bd407b24e7a89e123931211905&q=${city}&aqi=no`
      );
      setTemp(data.current.temp_c);
      setHumidity(data.current.humidity);
      setVisibility(data.current.vis_km);
      setPressure(data.current.pressure_mb);
      setWind(data.current.wind_kph);
      setIcon(data.current.condition.icon);
      setCondition(data.current.condition.text);
      setLocation(data.location.name);
    };
    fetch();
  }, [city]);

  return (
    <>
      <h2>{location}</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Temperature</th>
            <th scope="col">Wind Speed</th>
            <th scope="col">Pressure</th>
            <th scope="col">Visibility</th>
            <th scope="col">Humidity</th>
            <th scope="col">Condition</th>
            <th scope="col">Weather</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-danger">
            <td className="py-4">
              {temp}
              <span>&#8451;</span>
            </td>
            <td className="py-4">{wind} kph</td>
            <td className="py-4">{pressure} millibar</td>
            <td className="py-4">{visibility} kms</td>
            <td className="py-4">{humidity} %</td>
            <td className="py-4">{condition}</td>
            <td>
              <Image src={icon} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HomeScreen;
