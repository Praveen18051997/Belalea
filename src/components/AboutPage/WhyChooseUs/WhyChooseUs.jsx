import "./WhyChooseUs.css";

import whyImage from "../../../assets/images/why-choose-us.png";
import icon1 from "../../../assets/images/why-icon-1.png";
import icon2 from "../../../assets/images/why-icon-2.png";
import icon3 from "../../../assets/images/why-icon-3.png";

const WhyChoose = () => {
  return (
    <section className="why-choose">

      <div className="why-top">

        <div className="why-left">

          <span>WHY US?</span>

          <h2>
            We Source Seeds & Nuts <br />
            From Trusted Farmers
          </h2>

          <p>
            Our products are made from carefully selected organic ingredients.
            Every product is tested to ensure freshness, purity and premium
            quality.
          </p>

          <div className="why-points">

            <div className="point">
              <h4>100% Organic Products</h4>
              <p>
                Natural ingredients with no harmful chemicals.
              </p>
            </div>

            <div className="point">
              <h4>Certified Quality</h4>
              <p>
                Every batch is inspected before delivery.
              </p>
            </div>

          </div>

        </div>

        <div className="why-right">
          <img src={whyImage} alt="Organic" />
        </div>

      </div>

      <div className="why-bottom">

        <div className="feature-box">

          <img src={icon1} alt="" />

          <h3>Affordable</h3>

          <p>
            Best prices with premium quality.
          </p>

        </div>

        <div className="feature-box">

          <img src={icon2} alt="" />

          <h3>100% Fresh</h3>

          <p>
            Delivered directly from farms.
          </p>

        </div>

        <div className="feature-box">

          <img src={icon3} alt="" />

          <h3>Reliable</h3>

          <p>
            Trusted by thousands of customers.
          </p>

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;