import "./AboutBanner.css";
import banner from "../../../assets/images/about-banner.png";

const AboutBanner = () => {
  return (
    <section className="about-banner">

      <img
        src={banner}
        alt="About Banner"
        className="about-banner-bg"
      />

      <div className="about-banner-overlay">

        <h1>About Us</h1>
  
      </div>

    </section>
  );
};

export default AboutBanner;