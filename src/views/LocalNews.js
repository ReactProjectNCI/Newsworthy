import { useState, useEffect } from "react";
import axios from "axios";
import "../structure.css";

import NoCoOrds from "../components/NoCoOrds";

function LocalNews() {
  const myApiKey = "3896abe503404a159d076383d70a4539";

  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    getCoords();
  }, []);

  const getCoords = async function () {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported");
    }
    navigator.geolocation.getCurrentPosition(
      async function (pos) {
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
        try {
          //START - changed from previous example, for the new server
          var data = await axios(
            "https://api.geoapify.com/v1/geocode/reverse",
            {
              params: {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                apiKey: myApiKey,
              },
            }
          );
          setCity(data.data.features[0].properties.city);
          setCountry(data.data.features[0].properties.country);
          //END - changed from previous example, for the new server
        } catch (e) {
          setError("Could not retrieve location, please try again later");
        }
      },
      function (err) {
        setError(<NoCoOrds />);
      }
    );
  };

  function handleSubmit(event) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=a20aab9831307a0d4b3dbefec3d9781b`
      )
      .then((response) => {
        setData(response.data);
      });
  }

  if (error) {
    return (
      <>
        <div className="header-LN">
          <h1 className="brand-header">Local News</h1>
          <h3 className="subtitle-header-LN">Some text goeds here</h3>
        </div>
        <div>{error}</div>
      </>
    );
  } else {
    return (
      <>
        <div className="header-LN">
          <h1 className="brand-header">Local News</h1>
          <h3 className="subtitle-header-LN">Some text goeds here</h3>
        </div>
        <div className="WN-container">
          <div className="main-news">
            <h1>Top Stories for $variable</h1>
            <p>Top stories for local - same pattern as for World News</p>
          </div>
          <div className="most-read">
            <h2>Weather</h2>
            <p>
              Maybe a weather API here leveraging the API call for local news?
            </p>
            <h2>
              Your current latitude is {lat} <br />
              And your longitude is {long}
            </h2>
            <button onClick={handleSubmit}>
              Click Me if you would like to check <br /> Weather for your {city}{" "}
              city /{country} country?
            </button>
            <div>
              <h1>{data.name}</h1>
            </div>
            <div>{data.main ? <h2>{data.main.temp} fahrenheit</h2> : null}</div>
            <div>
              {data.weather ? <p>{data.weather[0].main} conditions</p> : null}
            </div>
            <div>
              {data.main ? <p>{data.main.humidity} % humidity</p> : null}
            </div>
            <div>{data.wind ? <p>{data.wind.speed} wind speed</p> : null}</div>
          </div>
        </div>
      </>
    );
  }
}

export default LocalNews;
