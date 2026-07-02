import "./PromoSection.css";
import promo1 from "../../assets/images/promo-card-1.png";
import promo2 from "../../assets/images/promo-card-2.png";
import { FaArrowRight } from "react-icons/fa";

const PromoSection = () => {
  return (
    <section className="promo-section">

      <div className="promo-card left-card">

        <img src={promo1} alt="Fresh Butter" />

        <div className="promo-content">
          <span>New Arrival</span>

          <h2>
            Fresh Organic <br />
            Butter
          </h2>

          <button>
            Shop Now
            <FaArrowRight />
          </button>
        </div>

      </div>

      <div className="promo-card right-card">

        <img src={promo2} alt="Discount Offer" />

        <div className="promo-content">

          <span>Special Offer</span>

          <h2>
            20% Discount <br />
            On Subscription
          </h2>

          <button>
            Explore
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
};

export default PromoSection;