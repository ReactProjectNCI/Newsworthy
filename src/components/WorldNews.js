import "../structure.css";

function WorldNews() {
  return (
    <>
      <div className="WN-container">
        <div className="main-news">
          <h1>Breaking News</h1>
          <p>This section contains an API with top world news stories.</p>
          <p>One big story spanning the width of the div.</p>
          <p>Two stories spanning the div</p>
          <p>Remainder is four stories spanning the div</p>
          <h3>It would be great if we can have pictures in the API</h3>
        </div>
        <div className="most-read">
          <h2>Most Read</h2>
          <p>
            Some other API call made here - I've suggested Most Read - but that
            may be hard to do. We could do videos or some other topic.
          </p>
        </div>
      </div>
    </>
  );
}

export default WorldNews;
