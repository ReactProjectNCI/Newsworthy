import axios from "axios";
import { useState } from "react";

function BreakingNews() {
  const [breakingNews, setBreakingNews] = useState([]);

  async function searchNews() {
    var newsResult = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e58ecc6825494507b5f15ada84611d57"
    );
    setBreakingNews(newsResult);
    console.log(breakingNews.data.articles);
  }

  return <>Hello</>;
}

export default BreakingNews;
