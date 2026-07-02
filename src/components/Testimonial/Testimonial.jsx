import "./Testimonial.css";
import bgImage from "../../assets/images/testimonial-image.jpg";
import customer from "../../assets/images/customer.png";

const Testimonial = () => {
  return (
    <section
      className="testimonial"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="testimonial-content">

        <span className="sub-title">Testimonials</span>

        <h2>What Our Customers Say?</h2>

        <img
          src={customer}
          alt="Customer"
          className="customer"
        />

        <div className="stars">
          ★★★★★
        </div>

        <p>
          Simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

        <div className="stats">

          <div className="circle">
            <h3>100%</h3>
            <p>Organic</p>
          </div>

          <div className="circle">
            <h3>15</h3>
            <p>Products</p>
          </div>

          <div className="circle">
            <h3>150+</h3>
            <p>Stores</p>
          </div>

          <div className="circle">
            <h3>5+</h3>
            <p>Years</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;