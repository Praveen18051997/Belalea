import "./Hero.css";
import heroBg from "../../assets/images/hero-background.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="hero">

      <div className="hero-desktop-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >

      <div className="hero-overlay">

        <p className="hero-tag">
          100% NATURAL PRODUCTS
        </p>

        <h1>
          Organic Food <br />
          For Healthy <br />
          Living
        </h1>

        <p className="hero-text">
          Fresh organic products directly from trusted farms.
          Healthy, natural and delicious every single day.
        </p>

        <button>
          Shop Now
          <FaArrowRight />
        </button>

      </div>
      </div>
    </section>
  );
};

export default Hero;