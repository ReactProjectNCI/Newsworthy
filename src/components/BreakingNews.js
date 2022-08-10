import axios from "axios";
import { useEffect, useState } from "react";
import BreakingNewsItem from "./BreakingNewsItem";

function BreakingNews() {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    var getBreakingNews = async () => {
      const newsResult = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e58ecc6825494507b5f15ada84611d57"
      );
      setBreakingNews(newsResult.data.articles);
    };
    getBreakingNews();
  });
  console.log(breakingNews);
  return (
    <>
      <p>Top stories coming to you as they happen throughout the day.</p>
      <ol>
        {breakingNews.map(function (i, index) {
          return (
            <>
              <div className="breaking-news-list" key={index}>
                <BreakingNewsItem
                  title={i.title}
                  url={i.url}
                  number={index}
                  image={i.urlToImage}
                />
              </div>
            </>
          );
        })}
      </ol>
    </>
  );
}

export default BreakingNews;
