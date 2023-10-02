import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";
import GradientLogo from "../components/common/GradientLogo";
import styled from "styled-components";
import { backgroundGradient, colors } from "../styles/theme.styled";

const backgroundImage = `https://res.cloudinary.com/dduqxunnf/image/upload/v1690220780/resto/banner.jpg`;

const HomeContainer = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 76vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Add a pseudo-element to create the blurred overlay on the left side */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: -1;
  }

  .headerContainer {
    text-align: center;
    color: ${colors.whiteColor};
    z-index: 1;

    h1 {
      font-size: 3rem;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 70px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      color: ${colors.primaryColor};
      /* Add a circular gradient background */
      background: ${backgroundGradient};
    }

    p {
      padding: 0;
      font-size: 40px;
      font-weight: lighter;
      color: black;
      /* Add a circular gradient background */
      background: ${backgroundGradient};
      /* Add text shadow */
      text-shadow: 2px 2px 4px ${colors.transparentBlackColor};
    }

    button {
      background-color: ${colors.primaryColor};
      margin-top: 50px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      height: 50px;
      width: 180px;
      text-decoration: none;
      color: ${colors.whiteColor};
      font-size: 20px;

      &:hover {
        box-shadow: 5px 5px 5px ${colors.transparentBlackColor};
      }
    }
  }

  /* Mobile View */
  @media only screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;

    .headerContainer {
      margin-left: 0;
      border-radius: 10px;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #12161956;
      color: ${colors.whiteColor};

      h1 {
        font-size: 60px;
        height: 30px;
        margin: 30px 0px;
        color: ${colors.primaryColor};
      }

      p {
        margin: 20px;
        font-size: 30px;
        color: ${colors.whiteColor};
        /* Add text shadow */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      button {
        margin-top: 20px;
        background-color: ${colors.primaryColor};
        color: ${colors.whiteColor};
        margin-bottom: 30px;
      }
    }
  }
`;

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
