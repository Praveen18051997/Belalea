import "./ContactInfo.css";

import contactImage from "../../assets/images/contact-fruits.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">

      <div className="contact-info-container">

        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>

        <div className="contact-content">

          <h2>
            We'd Love To Talk About How We Can Work Together.
          </h2>

          <p>
            Simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>

          <div className="contact-box">

            <MdEmail className="contact-icon" />

            <div>
              <h4>Email</h4>
              <p>support@belalea.com</p>
            </div>

          </div>

          <div className="contact-box">

            <FaPhoneAlt className="contact-icon" />

            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>

          </div>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;