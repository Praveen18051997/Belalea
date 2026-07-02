import "./BlogHero.css";
import { blogs } from "../../data/blog";

const BlogHero = ({ id }) => {

  const blog = blogs.find(item => item.id === Number(id));

  return (
    <section className="blog-hero">

      <img
        src={blog.image}
        alt={blog.title}
        className="hero-image"
      />

      <div className="hero-card">

        <span>{blog.date}</span>

        <h1>{blog.title}</h1>

        <p>{blog.excerpt}</p>

      </div>

    </section>
  );
};

export default BlogHero;