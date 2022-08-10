import { useState, useEffect } from "react";
import axios from "axios";
import "../structure.css";
import NoCoOrds from "../components/NoCoOrds";

function LocalNews() {
  const myApiKey = "1c26ef53722f43b990445c59b7d3a57c";
  //spare key "1c26ef53722f43b990445c59b7d3a57c"
  //spare key "3896abe503404a159d076383d70a4539"

  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [localNews, setLocalNews] = useState([]);
  const [icon, setIcon] = useState("");

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

  useEffect(() => {
    var getLocalNews = async () => {
      const localNewsResult = await axios.get(
        `https://newsapi.org/v2/everything?q=${country}&apiKey=79156c88061c41f48410cf961aa05af9`
      );
      setLocalNews(localNewsResult.data.articles);
    };
    getLocalNews();
  });

  useEffect(() => {
    var getWeather = async () => {
      const weatherResult = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=a20aab9831307a0d4b3dbefec3d9781b`
      );
      setData(weatherResult.data);
      console.log(weatherResult);
      setIcon(weatherResult.data.weather[0].icon);
      console.log(icon);
    };
    getWeather();
  });

  if (error) {
    return (
      <>
        <div className="header-LN">
          <h1 className="brand-header">Local News</h1>
          <h3 className="subtitle-header-LN">Some text goes here</h3>
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
          <div className="top-stories-container">
            <h1>Top Stories for {city}</h1>
          </div>
          <div className="breaking-news-container">
            <h2>Weather</h2>
          </div>
        </div>
        <div className="WN-container">
          <div className="world-news-items-container">
            {localNews.map(function (i, index) {
              return (
                <>
                  <div className={`world-news-item-${index}`}>
                    <img
                      className={`news-image-${index}`}
                      src={i.urlToImage}
                      alt=""
                    />
                    <div className={`world-news-item-title-${index}`}>
                      {i.title}
                    </div>
                    <p>{i.description}</p>
                    <a href={i.url}>
                      <button>Read More</button>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
          <div className="most-read">
            <div>
              <h1>{city}</h1>
            </div>
            <img
              //use API's weather icons
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt=""
            />
            <div>
              {data.main ? (
                // convert from kelvin to celcius
                <p>{Math.round(data.main.temp - 273)}° celcius</p>
              ) : null}
            </div>
            <div>
              {data.weather ? <p>{data.weather[0].main} conditions</p> : null}
            </div>
            <div>
              {data.main ? <p>{data.main.humidity}% humidity</p> : null}
            </div>
            <div>{data.wind ? <p>{data.wind.speed} wind speed</p> : null}</div>
          </div>
        </div>
      </>
    );
  }
}

export default LocalNews;
