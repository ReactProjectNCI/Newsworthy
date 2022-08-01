import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      NewsWorthy
      <Link to="/">World News</Link>
      <Link to="local">Local News</Link>
    </>
  );
}

export default NavBar;
