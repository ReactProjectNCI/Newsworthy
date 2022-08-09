import React from "react";
import "../structure.css";
import WorldNewsItems from "../components/WorldNewsItems";
import BreakingNews from "../components/BreakingNews";

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
        <div className="top-stories-container">
          <h1>Top Stories</h1>
        </div>
        <div className="breaking-news-container">
          <h1>Breaking News</h1>
        </div>
      </div>
      <div className="WN-container">
        <div className="world-news-items-container">
          <WorldNewsItems />
        </div>

        <div className="most-read">
          <BreakingNews />
        </div>
      </div>
    </>
  );
}

export default WorldNews;
