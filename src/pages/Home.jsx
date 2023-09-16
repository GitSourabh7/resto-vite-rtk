import "../styles/HomeStyles.css";
const Banner = `https://res.cloudinary.com/dduqxunnf/image/upload/v1690220780/resto/banner.jpg`;
const Home = () => {
  return (
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
  );
};

export default Home;
