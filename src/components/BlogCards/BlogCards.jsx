import "./BlogCards.css";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blog";

const BlogCards = () => {
  return (
    <section className="blog-cards">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="blog-card"
          >
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />

              <div className="blog-date">
                <span>{blog.date}</span>
              </div>
            </div>

            <div className="blog-content">
              <h3>{blog.title}</h3>

              <p>{blog.excerpt}</p>

              <span className="read-more">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogCards;