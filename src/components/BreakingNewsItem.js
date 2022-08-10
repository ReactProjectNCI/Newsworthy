import "../structure.css";

function BreakingNewsItem(props) {
  if (props.number <= 2) {
    return (
      <>
        <a href={props.url}>{props.title}</a>
        <br />
        <img className="BN-image" src={props.image} alt="" />
      </>
    );
  } else {
    return (
      <>
        <a href={props.url}>{props.title}</a>
      </>
    );
  }
}

export default BreakingNewsItem;
