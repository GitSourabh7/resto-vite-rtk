import { Box, Typography } from "@mui/material";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 2,
          mx: "5%",
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4" sx={{ pb: 3 }}>
          Welcome to Resto
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Welcome to Resto, your home for delicious Food! We&apos;re so glad
          you&apos;re here. We&apos;re passionate about using fresh, local
          ingredients to create dishes that are both flavorful and satisfying.
          Our menu features a wide variety of options, so there&apos;s something
          for everyone. Whether you&apos;re looking for a casual meal with
          friends or a romantic dinner for two, we&apos;re the perfect place for
          you. We&apos;ll make sure you have a dining experience that
          you&apos;ll never forget. So what are you waiting for? Come on in and
          let us show you what we&apos;re all about!
        </Typography>
        <br />
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "800" }}>
          Our Mission :
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Our mission is to provide our guests with a delicious and affordable
          dining experience around the world. We believe that everyone deserves
          to enjoy a great meal, no matter their budget. That&apos;s why we
          offer our food at a fraction of the cost of other restaurants in our
          area.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "800" }}>
          Our Story :
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Resto was founded in 2023 by two friends, John and Sam, who shared a
          passion for food and travel. They had always dreamed of opening a
          restaurant that would bring people together to enjoy delicious food
          from all over the world. After years of planning and preparation,
          Resto finally opened its doors in Banglaore, Karnataka. The restaurant
          quickly became a popular spot for locals and tourists alike, thanks to
          its diverse menu, fresh ingredients, and friendly service. Resto is
          committed to providing its guests with a delicious, affordable, and
          accessible dining experience. The restaurant uses fresh, local, and
          global ingredients in its dishes, and it offers a wide variety of
          options to choose from, including vegetarian, vegan, and gluten-free
          options. The team at Resto is made up of passionate and experienced
          chefs and servers who are dedicated to providing guests with the best
          possible dining experience. The team is also diverse and inclusive,
          and it celebrates the unique cultures and perspectives of its staff.
          Resto is more than just a restaurant. It is a place where people can
          come together to enjoy delicious food, learn about different cultures,
          and make new memories. The team at Resto is grateful for the support
          of its guests, and they look forward to continuing to serve the
          community for many years to come.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "800" }}>
          Our Team :
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Our team is made up of passionate and experienced chefs and servers
          who are dedicated to providing our guests with the best possible
          dining experience. We are committed to using fresh, local & global
          ingredients in our dishes, and we always go the extra mile to make
          sure that our guests are satisfied.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "1.2rem" }}>
          We hope to see you soon!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
