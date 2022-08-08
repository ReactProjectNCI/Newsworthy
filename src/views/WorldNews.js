import React from "react";
import "../structure.css";
import WorldNewsItems from "../components/WorldNewsItems";

function WorldNews() {
  return (
    <>
      <div className="header">
        <h1 className="brand-header">World News</h1>
        <h3 className="subtitle-header">
          Your Definitive Guide to an Uncertain World
        </h3>
      </div>
      <div className="WN-container">
        <div className="main-news">
          <h1>Top Stories</h1>
          <WorldNewsItems />
        </div>
        <div className="most-read">
          <h2>Most Read</h2>
          <p>
            Some other API call made here - I've suggested Most Read - but that
            may be hard to do. We could do videos or some other topic.
          </p>
        </div>
      </div>
    </>
  );
}

export default WorldNews;
