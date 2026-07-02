import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Layout>
      <section className="notfound">

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button>Back To Home</button>
        </Link>

      </section>
    </Layout>
  );
};

export default NotFound;