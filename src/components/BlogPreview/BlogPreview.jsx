import "./BlogPreview.css";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "25\nAug",
    title: "Summer Salad Dressing",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
  },
  {
    id: 2,
    image: blog2,
    date: "25\nOct",
    title: "What Vitamins Are Missing?",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
  },
];

const BlogPreview = () => {
  return (
    <section className="blog-preview">

      <div className="blog-header">

        <div>
          <span className="blog-subtitle">News</span>

          <h2>
            Organic Product News
            <br />
            & Much More
          </h2>
        </div>

        <button className="blog-more-btn">
          More News
        </button>

      </div>

      <div className="blog-grid">

        {blogs.map((blog) => (

          <div
            key={blog.id}
            className="blog-card"
            style={{ backgroundImage: `url(${blog.image})` }}
          >

            <div className="blog-date">
              {blog.date.split("\n").map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="blog-content">

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button className="read-btn">
                Read More
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default BlogPreview;