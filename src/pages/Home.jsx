import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";
import GradientLogo from "../components/common/GradientLogo";
import { colors } from "../styles/theme.styled";
import { HomeContainer } from "./Home.styled";

const Home = () => {
  const [typingText] = useState("");

  useEffect(() => {
    const typewriter = new Typewriter("#typing", {
      loop: true,
      delay: 50,
    });

    typewriter
      .typeString("Best global food restaurant in ")
      .typeString(
        `<strong><span style="color: ${colors.primaryColor};">India</span></strong>`
      )
      .pauseFor(500)
      .deleteChars(5)
      .typeString(
        `<strong><span style="color: ${colors.primaryColor};">China</span></strong>`
      )
      .pauseFor(500)
      .deleteChars(5)
      .typeString(
        `<strong><span style="color: ${colors.primaryColor};">Japan</span></strong>`
      )
      .pauseFor(500)
      .deleteChars(5)
      .typeString(
        `<strong><span style="color: ${colors.primaryColor};">Italy</span></strong>`
      )
      .pauseFor(500)
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <Layout>
      <HomeContainer>
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
      </HomeContainer>
    </Layout>
  );
};

export default Home;
