import AboutSection from "../../components/AboutSection";
import { Link } from "react-router-dom";
import "./index.css";

function Homepage() {
  return (
    <>
      <div className="main-content">
        <div className="image-container">
          <div className="bg-image"></div>
        </div>

        <div className="nav-bar">
          <div className="nav-logo">
            <div className="logo-img"></div>
          </div>
          <div className="nav-links">
            <div className="links">
              <div className="randompic-link">
                <Link to="random">Random</Link>
              </div>
              <div className="about-link">
                <a href="#about-section">About</a>
              </div>
              <div className="login-link">
                <Link to="login">Login</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="trust-container"></div>
        </div>
        <div id="about-section">
          <AboutSection />
        </div>
        <div className="footer-section">
          <div className="contacts">
            <div className="contact-title">Contact Us</div>
            <div>Call us: 790262382429</div>
            <a>Instagram: @snbafsjfb</a>
            <a>X: @snbafsjfb</a>
            <a>Facebook</a>
          </div>
          <div className="footer-logo"></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
