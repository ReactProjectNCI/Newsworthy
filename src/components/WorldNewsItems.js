import React from "react";
import "../structure.css";

class WorldNewsItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name1: "Loading ⟳", count: 0 };
  }
  async componentDidMount() {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=79156c88061c41f48410cf961aa05af9`
    );
    let data = await res.json();
    let arr = data.articles.map((p, index) => {
      return (
        <>
          {/* Variable enables loop in Sass. Learnt how to assign variable to className here: https://stackoverflow.com/questions/29842289/how-to-pass-a-state-classname-variable-to-another-component-in-react */}
          <div className={`world-news-item-${index}`}>
            <img className={`news-image-${index}`} src={p.urlToImage} alt="" />
            <div className={`world-news-item-title-${index}`}>{p.title}</div>

            <div>
              <p>{p.description}</p>
              <a href={p.url}>
                <button>Read more</button>
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
