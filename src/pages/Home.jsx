import { useEffect, useState } from "react";
import "../styles/HomeStyles.css";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";
import GradientLogo from "../components/common/GradientLogo";

const Home = () => {
  const [typingText] = useState("");

  useEffect(() => {
    const typewriter = new Typewriter("#typing", {
      loop: true,
      delay: 50,
    });

    typewriter
      .typeString("Best global food restaurant in ")
      .typeString(`<strong><span style="color: #1976d2;">India</span></strong>`)
      .pauseFor(500)
      .deleteChars(5)
      .typeString(`<strong><span style="color: #1976d2;">China</span></strong>`)
      .pauseFor(500)
      .deleteChars(5)
      .typeString(`<strong><span style="color: #1976d2;">Japan</span></strong>`)
      .pauseFor(500)
      .deleteChars(5)
      .typeString(`<strong><span style="color: #1976d2;">Italy</span></strong>`)
      .pauseFor(500)
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <Layout>
      <div className="home">
        <div className="headerContainer">
          <GradientLogo />
          <p id="typing">{typingText}</p>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on click
            >
              Order Now
            </motion.button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
