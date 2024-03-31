import "./index.css";
import { Link } from "react-router-dom";

function RandomPic() {
  return (
    <>
      <div className="main-content">
        <div className="random-navbar">
          <div className="random-home-link">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="picture-container">
          <div className="picture"></div>
        </div>
      </div>
    </>
  );
}

export default RandomPic;
