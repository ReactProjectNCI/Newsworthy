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
    let arr = data.articles.map((p) => {
      return (
        <>
          <div>
            <div>{p.title}</div>
            <img className="news-image" src={p.urlToImage} alt="" />
            <div>
              <h4>{p.description}</h4>
              <a href={p.url}>
                <button>Read more</button>
              </a>
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

export default WorldNewsItems;
