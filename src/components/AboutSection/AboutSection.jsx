import "./AboutSection.css";
import aboutImage from "../../assets/images/about-image.png";
import leafIcon from "../../assets/images/leaf-icon.png";
import qualityIcon from "../../assets/images/quality-icon.png";

const AboutSection = () => {
  return (
    <section className="about-section">

      <img
        src={aboutImage}
        alt="About Background"
        className="about-bg"
      />

      <div className="about-content">
        <div className="content">
        <span className="about-subtitle">
          ABOUT BELALEA
        </span>

        <h2>
          We Work Only With <br />
          Quality Products <br />
          From Local Farmers
        </h2>

        <p className="about-text">
          We carefully select fresh organic ingredients from trusted local farms.
          Every product is prepared with quality, freshness and healthy living in mind.
        </p>

        <div className="feature">
          <img src={leafIcon} alt="" />
          <div>
            <h4>100% Natural Products</h4>
            <p>Completely natural ingredients without harmful chemicals.</p>
          </div>
        </div>
          
        <div className="feature">
          <img src={qualityIcon} alt="" />
          <div>
            <h4>Premium Quality</h4>
            <p>Carefully inspected products with premium quality standards.</p>
          </div>

        </div>

        <button>Explore More</button>

      </div>

    </div>

    </section>
  );
};

export default AboutSection;