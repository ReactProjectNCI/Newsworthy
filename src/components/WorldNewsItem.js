import "../structure.css";

function WorldNewsItem(props) {
  return (
    <>
      <div className={`world-news-item-${props.index}`}>
        <img className={`news-image-${props.index}`} src={props.image} alt="" />
        <div className={`world-news-item-title-${props.index}`}>
          {props.title}
        </div>
        <p>{props.description}</p>
        <a href={props.url}>
          <button>Read More</button>
        </a>
      </div>
    </>
  );
}

export default WorldNewsItem;
