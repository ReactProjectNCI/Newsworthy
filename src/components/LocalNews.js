import "../structure.css";

function LocalNews() {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default LocalNews;
