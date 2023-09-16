import { Box, Typography } from "@mui/material";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
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
