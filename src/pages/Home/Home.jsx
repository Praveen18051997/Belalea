import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import PromoSection from "../../components/PromoSection/PromoSection";
import Products from "../../components/Products/Products";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import Testimonial from "../../components/Testimonial/Testimonial";
import MonthlyOffers from "../../components/MonthlyOffers/MonthlyOffers";
import EcoFriendly from "../../components/EcoFriendly/EcoFriendly";
import PromoCards from "../../components/PromoCards/PromoCards";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <Layout>

      <Hero />
      <PromoSection />
      <AboutSection />
      <Products
        limit={8}
      />
      <Testimonial />
      <MonthlyOffers />
      <EcoFriendly />
      <PromoCards />
      <BlogPreview />
      <Newsletter />
  
      
    </Layout>
  );
};

export default Home;