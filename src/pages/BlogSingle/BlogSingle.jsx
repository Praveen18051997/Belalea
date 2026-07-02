import Layout from "../../components/Layout/Layout";
import BlogHero from "../../components/BlogHero/BlogHero";
import BlogContent from "../../components/BlogContent/BlogContent";
import Newsletter from "../../components/Newsletter/Newsletter";

import { useParams } from "react-router-dom";

const BlogSingle = () => {

  const { id } = useParams();

  return (
    <Layout>

      <BlogHero id={id} />

      <BlogContent id={id} />

      <Newsletter />

    </Layout>
  );
};

export default BlogSingle;