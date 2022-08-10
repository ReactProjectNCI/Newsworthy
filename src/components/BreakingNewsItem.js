import "../structure.css";

function BreakingNewsItem(props) {
  if (props.number === 0) {
    return (
      <>
        <h2 className="BN-item-title">Happening Right Now</h2>
        <li>
          <a href={props.url}>{props.title}</a>
          <br />
          <img className="BN-image" src={props.image} alt="" />
        </li>
      </>
    );
  } else if (props.number <= 2) {
    return (
      <>
        <li>
          <a href={props.url}>{props.title}</a>
          <br />
          <img className="BN-image" src={props.image} alt="" />
        </li>
      </>
    );
  } else if (props.number === 3) {
    return (
      <>
        <h2 className="BN-item-title">Earlier in the Day</h2>
        <li>
          <a href={props.url}>{props.title}</a>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li>
          <a href={props.url}>{props.title}</a>
        </li>
      </>
    );
  }
}

export default BreakingNewsItem;
