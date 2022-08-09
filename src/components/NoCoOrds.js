import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

import "../structure.css";

function NoCoOrds() {
  return (
    <>
      <div className="error">
        <br />
        <br />
        <FontAwesomeIcon
          icon={faMagnifyingGlassLocation}
          className="location-icon"
        ></FontAwesomeIcon>
        <h1>Whoops!</h1>
        <p>
          In order for us to deliver local news, we need to know where you are.
        </p>
        <p>Enable your location services.</p>
      </div>
    </>
  );
}

export default NoCoOrds;
