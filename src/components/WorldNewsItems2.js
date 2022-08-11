import { useState, useEffect } from "react";
import axios from "axios";
import "../structure.css";
import WorldNewsItem from "./WorldNewsItem";

// key 1: e58ecc6825494507b5f15ada84611d57
// key 2: 3e7d62ceaff441929bfef27bbf6d6b78

function WorldNewsItems2() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    var getWorldNews = async () => {
      const worldNewsResult = await axios.get(
        `https://newsapi.org/v2/everything?q=us&apiKey=3e7d62ceaff441929bfef27bbf6d6b78`
      );
      setNews(worldNewsResult.data.articles);
    };
    getWorldNews();
  }, []);

  return (
    <>
      {news.map(function (i, index) {
        return (
          <>
            <WorldNewsItem
              image={i.urlToImage}
              title={i.title}
              description={i.description}
              url={i.url}
              index={index}
            />
          </>
        );
      })}
    </>
  );
}
export default WorldNewsItems2;
