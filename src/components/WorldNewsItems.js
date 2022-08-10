import React from "react";
import axios from "axios";
import "../structure.css";

class WorldNewsItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name1: "Loading ⟳", count: 0 };
  }
  async componentDidMount() {
    let res = await axios.get("https://api.newscatcherapi.com/v2/search", {
      params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
      headers: { "x-api-key": "HO-VkGpNm57Dj35yusynQ7AJFup3IjlCQEwsf-Oxn9s" },
    });
    let data = await res.json();
    let arr = data.articles.map((p, index) => {
      console.log(arr);
      return (
        <>
          {/* Variable enables loop in Sass. Learnt how to assign variable to className here: https://stackoverflow.com/questions/29842289/how-to-pass-a-state-classname-variable-to-another-component-in-react */}
          <div className={`world-news-item-${index}`}>
            <img className={`news-image-${index}`} src={p.media} alt="" />
            <div className={`world-news-item-title-${index}`}>{p.title}</div>

            <div>
              <p>{p.excerpt}</p>
              <a href={p.link}>
                <button>Read More</button>
              </a>
            </div>
          </div>
        </>
      );
    });
    this.setState({ name1: arr });
  }
  render() {
    return <>{this.state.name1}</>;
  }
}

export default WorldNewsItems;
