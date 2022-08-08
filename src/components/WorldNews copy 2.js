import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "../structure.css";

function WorldNews() {
  const [worldNews, setWorldNews] = useEffect([]);

  async function componentDidMount() {
    let res = await axios.get(
      `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=79156c88061c41f48410cf961aa05af9`
    );
    let data = await res.json();
    let w = { width: "400px" };
    setWorldNews(data.articles)
    }

return (<><div className="header">
<h1 className="brand-header">World News</h1>
<h3 className="subtitle-header">
  Your Definitive Guide to an Uncertain World
</h3>
</div>
<div>
  {worldNews.map(function (i, index){
    return (
      <div key={index}>
        <WorldNewsResult feature={i.something.something} />
      </div>
    )
  })}
  </div></>)


      {worldNews.map(function(i, index)){
        return (
        <div key={index}><WorldNewsResult i={i} /></div>);}}

    let arr = data.articles.map((p) => {
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
              <div>
                <div>
                  <img src={p.urlToImage} />
                  <div>
                    <div>{p.title}</div>
                    <h4
                      class="text-gray-700 text-base"
                      className="subtitle-header"
                    >
                      {p.description}
                    </h4>
                    <button>
                      {" "}
                      <a href={p.url}>Read more</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="most-read">
              <h2>Hashtags</h2>
              <span>#worldsnews</span>
              <br />
              <span>#topstories</span>
              <br />
              <span>#globalnews</span>
              <br />
            </div>
          </div>
        </>
      );
    });
    console.log(arr);
    this.setState({ name1: arr });
  }
  render() {
    return <div>{this.state.name1}</div>;
  }
}

export default WorldNews;
