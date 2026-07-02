import "./AddressSection.css";

import addressBg from "../../assets/images/address-bg.png";

import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const AddressSection = () => {
  return (
    <section className="address-section">

      <div className="address-container">

        <img
          src={addressBg}
          alt="Address Background"
          className="address-bg"
        />

        <div className="address-card">

          <span className="small-title">
            Find us
          </span>

          <h2>Our Address</h2>

          <div className="address-item">

            <FaMapMarkerAlt className="address-icon" />

            <div>
              <h4>Office</h4>
              <p>86 Road, Brooklyn Street, USA</p>
            </div>

          </div>

          <div className="address-item">

            <FaClock className="address-icon" />

            <div>
              <h4>Working Hours</h4>
              <p>Mon - Fri : 9:00 AM - 6:00 PM</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AddressSection;