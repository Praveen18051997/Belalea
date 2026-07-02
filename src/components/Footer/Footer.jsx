import "./Footer.css";
import logo from "../../assets/images/Logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h3>Contact Us</h3>

          <h5>Email</h5>
          <p>needhelp@organic.com</p>

          <h5>Phone</h5>
          <p>666 888 888</p>

          <h5>Address</h5>
          <p>88 Road, Brooklyn Street, USA</p>

        </div>

        <div className="footer-center">

          <img src={logo} alt="Belalea" />

          <p>
            Follow our latest updates and offers
            <br />
            on our social media platforms.
          </p>

          <div className="footer-social">

            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />

          </div>

        </div>

        <div className="footer-column">

          <h3>Utility Pages</h3>

          <p>Style Guide</p>
          <p>404 Not Found</p>
          <p>Password Protected</p>
          <p>Licences</p>
          <p>Changelog</p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;