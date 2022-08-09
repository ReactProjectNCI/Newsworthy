function BreakingNewsItem(props) {
  return (
    <>
      <a href={props.url}>{props.title}</a>
    </>
  );
}

export default BreakingNewsItem;
