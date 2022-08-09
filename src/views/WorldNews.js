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
      <h1>Top Stories</h1>
      <div className="WN-container">
        <div className="world-news-items-container">
          <WorldNewsItems />
        </div>
        <div className="most-read">
          <h2>Breaking News</h2>
          <BreakingNews />
        </div>
      </div>
    </>
  );
}

export default WorldNews;
