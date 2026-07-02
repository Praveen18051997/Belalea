import "./BlogContent.css";
import { blogs } from "../../data/blog";

const BlogContent = ({ id }) => {

  const blog = blogs.find(item => item.id === Number(id));

  return (
    <section className="blog-content-section">

      <div className="content-container">

        <p>{blog.content}</p>

        <h2>{blog.heading}</h2>

        <p>{blog.content}</p>

        <ul>
          <li>Natural ingredients</li>
          <li>Certified organic farming</li>
          <li>No harmful chemicals</li>
        </ul>

        <blockquote>
          {blog.quote}
        </blockquote>

        <h3>{blog.ending}</h3>

        <p>{blog.content}</p>

      </div>

    </section>
  );
};

export default BlogContent;