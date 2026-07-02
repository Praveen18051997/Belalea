import Layout from "../../components/Layout/Layout";
import BlogBanner from "../../assets/images/blog-banner.png";
import BlogCards from "../../components/BlogCards/BlogCards";
import Newsletter from "../../components/Newsletter/Newsletter";

const Blog = () => {
  return (
    <Layout>

      <section
        className="shop-banner"
        style={{ backgroundImage: `url(${BlogBanner})` }}
      >
        <h1>Blog</h1>
      </section>

      <BlogCards />

      <Newsletter />

    </Layout>
  );
};

export default Blog;