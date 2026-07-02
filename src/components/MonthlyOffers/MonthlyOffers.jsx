import "./MonthlyOffers.css";

import oil1 from "../../assets/images/olive-oil-1.png";
import oil2 from "../../assets/images/olive-oil-2.png";
import oil3 from "../../assets/images/olive-oil-3.png";
import oil4 from "../../assets/images/olive-oil-4.png";

const offers = [
  {
    id:1,
    image:oil1,
    title:"Pumpkin Oil, 250ml",
    tag:"Oil"
  },
  {
    id:2,
    image:oil2,
    title:"Cumin Oil, 250ml",
    tag:"Oil"
  },
  {
    id:3,
    image:oil3,
    title:"Walnut Oil, 250ml",
    tag:"Oil"
  },
  {
    id:4,
    image:oil4,
    title:"Hemp Oil, 250ml",
    tag:"Oil"
  }
];

const MonthlyOffers = () => {
  return (
    <section className="offers">

      <div className="offers-header">

        <h2>Best Monthly Offers</h2>

        <button>View All</button>

      </div>

      <div className="offers-grid">

        {offers.map((item)=>(
          <div className="offer-card" key={item.id}>

            <span className="tag">{item.tag}</span>

            <img src={item.image} alt={item.title}/>

            <h4>{item.title}</h4>

          </div>
        ))}

      </div>

    </section>
  );
};

export default MonthlyOffers;