import "./Shop.css";
import shopBanner from "../../assets/images/shop-banner.png";
import Layout from "../../components/Layout/Layout";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";

const Shop = () => {
  return (
    <Layout>
      <section
        className="shop-banner"
        style={{ backgroundImage: `url(${shopBanner})` }}
      >
        <h1>Shop</h1>
      </section>

      <Products
        title={false}
        showButton={false}
        limit={12} />

      <Newsletter />
    </Layout>
  );
};

export default Shop;