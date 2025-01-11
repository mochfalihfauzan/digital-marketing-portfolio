import profilePicture from "../../assets/profile-picture.jpg";
import "../../style/Header.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} alt="" />
        <h3>Moch Falih Fauzan</h3>
        <div className="job-title">
          <p>Digital Marketing</p>
          <p> • </p>
          <p>SEO & SEM Specialist</p>
          <p> • </p>
          <p>Performance Marketing</p>
          <p> • </p>
          <p>Digital Ads Specialist</p>
        </div>
        <div className="socialMedia">
          <a href="https://www.instagram.com/falihfauzan_/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/moch-falih-fauzan/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
