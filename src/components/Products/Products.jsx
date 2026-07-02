import "./Products.css";
import { Link } from "react-router-dom"
import oil1 from "../../assets/images/olive-oil-1.png";
import oil2 from "../../assets/images/olive-oil-2.png";
import oil3 from "../../assets/images/olive-oil-3.png";
import oil4 from "../../assets/images/olive-oil-4.png";
import flour1 from "../../assets/images/rice-flour-1.png";
import flour2 from "../../assets/images/rice-flour-2.png";
import flour3 from "../../assets/images/rice-flour-3.png";
import flour4 from "../../assets/images/rice-flour-4.png";

const products = [
  {
    id: 1,
    category: "Oil",
    name: "Organic Olive Oil, 250ml",
    image: oil1,
  },
  {
    id: 2,
    category: "Oil",
    name: "cumin Oil, 250ml",
    image: oil2,
  },
  {
    id: 3,
    category: "Oil",
    name: "Walnut Oil, 250ml",
    image: oil3,
  },
  {
    id: 4,
    category: "Oil",
    name: "Hemp Oil, 250ml",
    image: oil4,
  },
  {
    id: 5,
    category: "Flour",
    name: "Rice Flour, 500g",
    image: flour1,
  },
  {
    id: 6,
    category: "Flour",
    name: "Wheat Flour, 500g",
    image: flour2,
  },
  {
    id: 7,
    category: "Flour",
    name: "Gram Flour, 500g",
    image: flour3,
  },
  {
    id: 8,
    category: "Flour",
    name: "Corn Flour, 500g",
    image: flour4,
  },
  {
    id: 9,
    category: "Oil",
    name: "Organic Olive Oil, 250ml",
    image: oil1,
  },
  {
    id: 10,
    category: "Oil",
    name: "cumin Oil, 250ml",
    image: oil2,
  },
  {
    id: 11,
    category: "Oil",
    name: "Walnut Oil, 250ml",
    image: oil3,
  },
  {
    id: 12,
    category: "Oil",
    name: "Hemp Oil, 250ml",
    image: oil4,
  },
];

const Products = ({
  title = true,
  showButton = true,
  limit = products.length,
}) => {
  return (
    <section className="products products-page">

      {title && (
        <div className="products-header">
          <h5>Categories</h5>
          <h2>Our Products</h2>
        </div>
      )}

      <div className="product-grid">

        {products.slice(0, limit).map((item) => (

          <Link 
            to={`/shop/${item.id}`}
            className="product-card"
            key={item.id}
          >

            <span className="badge">{item.category}</span>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

          </Link>

        ))}
      </div>

       <div className="products-btn">
        {showButton && (
          <button>View All</button>
        )}
        </div>

    </section>
  );
};

export default Products;