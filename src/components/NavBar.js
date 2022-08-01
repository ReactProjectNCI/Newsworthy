import { Link } from "react-router-dom";
import "../banner.css";

function NavBar() {
  return (
    <>
      <div className="flexbox-container">
        <div className="brand">NewsWorthy</div>
        <div className="navbar-container">
          <Link to="/" className="link">
            World News
          </Link>
          <Link to="local" className="link">
            Local News
          </Link>
        </div>
        <div className="contribute">
          <Link to="/contrib" className="link">
            Contribute
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
