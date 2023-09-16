import "../styles/HomeStyles.css";
import Layout from "../components/layout/Layout";

const Banner = `https://res.cloudinary.com/dduqxunnf/image/upload/v1690220780/resto/banner.jpg`;
const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="headerContainer">
          <h1>Resto</h1>
          <p id="typing">Best food in India</p>
          <button>Order Now</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
