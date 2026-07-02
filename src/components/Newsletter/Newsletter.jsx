import "./Newsletter.css";
import newsletterBg from "../../assets/images/newsletter-bg.png";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <div
        className="newsletter-box"
        style={{ backgroundImage: `url(${newsletterBg})` }}
      >

        <div className="newsletter-left">
          <h2>
            Be The First To Know
            <br />
            About New Offers!
          </h2>
        </div>

        <div className="newsletter-right">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;