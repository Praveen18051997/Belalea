import "./PromoCards.css";
import promo3 from "../../assets/images/promo-card-3.png";
import promo4 from "../../assets/images/promo-card-4.png";
import promo5 from "../../assets/images/promo-card-5.png";


const cards = [
  {
    id: 1,
    image: promo3,
    title: "Natural Oils",
  },
  {
    id: 2,
    image: promo4,
    title: "New Arrivals",
  },
  {
    id: 3,
    image: promo5,
    title: "Healthy Flour",
  },
];

const PromoCards = () => {
  return (
    <section className="promo-section1">
      <div className="promo-container1">
        {cards.map((card) => (
          <div
            className="promo-card1"
            key={card.id}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <button>{card.title}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoCards;