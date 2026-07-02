import "./ProductDetails.css";
import { products } from "../../data/product";

const ProductDetails = ({ id }) => {

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <section className="product-details">
      <div className="details-container">

        <div className="product-images">

          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="thumbnail-row">
            {[1,2,3,4].map((item)=>(
              <img
                key={item}
                src={product.image}
                alt={product.name}
              />
            ))}
          </div>

        </div>

        <div className="product-info">

          <h2>{product.name}</h2>

          <p>
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s.
          </p>

          <p>
            Simply dummy text of the printing and typesetting industry.
          </p>

          <div className="buy-buttons">
            <button className="pink-btn">
              Wildberries
            </button>

            <button className="blue-btn">
              OZON
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;