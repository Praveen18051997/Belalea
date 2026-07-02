import "./EcoFriendly.css";
import ecoImage from "../../assets/images/eco-friendly.png";

const EcoFriendly = () => {
  return (
    <section className="eco">

      <div className="eco-image">
        <img src={ecoImage} alt="Eco Friendly" />
      </div>

      <div className="eco-content">

        <span>Eco Friendly</span>

        <h2>
          Creating a <br />
          Healthy Future
        </h2>

        <div className="eco-item">
          <h4>Modern Agriculture</h4>
          <p>
            We use sustainable farming methods that protect nature while
            producing healthy organic food.
          </p>
        </div>

        <div className="eco-item">
          <h4>Advanced Production</h4>
          <p>
            Every product is carefully processed using modern technology
            without compromising quality.
          </p>
        </div>

        <div className="eco-item">
          <h4>Promoting Natural Foods</h4>
          <p>
            Our goal is to encourage healthy eating through fresh,
            natural and organic products.
          </p>
        </div>

      </div>

    </section>
  );
};

export default EcoFriendly;