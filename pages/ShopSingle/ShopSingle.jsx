import Layout from "../../components/Layout/Layout";
import ShopSingleBanner from "../../assets/images/shop-single-banner.png";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import { useParams } from "react-router-dom";
import { products } from "../../data/product";

const ShopSingle = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  return (
    <Layout>
      <section
              className="shop-banner"
              style={{ backgroundImage: `url(${ShopSingleBanner})` }}
            >
              <h1>
                {product?.category}
              </h1>
            </section>
      <ProductDetails id={id} />
      <Products 
        title={false}
        showButton={false}
        limit={4}
      />
      <Newsletter />
    </Layout>
  );
};

export default ShopSingle;