import "../styles/HomeStyles.css";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "../components/common/typewriter";
// import "./HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="headerContainer">
          <h1>Resto</h1>
          <p id="typing">Best food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
