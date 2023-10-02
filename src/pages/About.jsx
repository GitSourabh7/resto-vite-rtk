import Layout from "../components/layout/Layout";
import styled from "styled-components";

// Styled components
const AboutContainer = styled.div`
  margin: 2% 5%;
  text-align: left;
`;

const Heading = styled.h4`
  font-weight: bold;
  margin: 2rem 0;
  font-size: 2rem;
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem 0 0.5rem 0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  margin: 1rem 0;
`;

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <Heading>Welcome to Resto</Heading>
        <Text>
          Welcome to Resto, your home for delicious Food! We&apos;re so glad
          you&apos;re here. We&apos;re passionate about using fresh, local
          ingredients to create dishes that are both flavorful and satisfying.
          Our menu features a wide variety of options, so there&apos;s something
          for everyone. Whether you&apos;re looking for a casual meal with
          friends or a romantic dinner for two, we&apos;re the perfect place for
          you. We&apos;ll make sure you have a dining experience that
          you&apos;ll never forget. So what are you waiting for? Come on in and
          let us show you what we&apos;re all about!
        </Text>

        <SubHeading>Our Mission :</SubHeading>
        <Text>
          Our mission is to provide our guests with a delicious and affordable
          dining experience around the world. We believe that everyone deserves
          to enjoy a great meal, no matter their budget. That&apos;s why we
          offer our food at a fraction of the cost of other restaurants in our
          area.
        </Text>

        <SubHeading>Our Story :</SubHeading>
        <Text>
          Resto was founded in 2023 by two friends, John and Sam, who shared a
          passion for food and travel. They had always dreamed of opening a
          restaurant that would bring people together to enjoy delicious food
          from all over the world.
        </Text>
        <Text>
          After years of planning and preparation, Resto finally opened its
          doors in Bangalore, Karnataka. The restaurant quickly became a popular
          spot for locals and tourists alike, thanks to its diverse menu, fresh
          ingredients, and friendly service.
        </Text>
        <Text>
          Resto is committed to providing its guests with a delicious,
          affordable, and accessible dining experience. The restaurant uses
          fresh, local, and global ingredients in its dishes, and it offers a
          wide variety of options to choose from, including vegetarian, vegan,
          and gluten-free options.
        </Text>
        <Text>
          The team at Resto is made up of passionate and experienced chefs and
          servers who are dedicated to providing guests with the best possible
          dining experience. The team is also diverse and inclusive, and it
          celebrates the unique cultures and perspectives of its staff.
        </Text>
        <Text>
          Resto is more than just a restaurant. It is a place where people can
          come together to enjoy delicious food, learn about different cultures,
          and make new memories. The team at Resto is grateful for the support
          of its guests and looks forward to continuing to serve the community
          for many years to come.
        </Text>

        <SubHeading>Our Team :</SubHeading>
        <Text>
          Our team is made up of passionate and experienced chefs and servers
          who are dedicated to providing our guests with the best possible
          dining experience. We are committed to using fresh, local & global
          ingredients in our dishes, and we always go the extra mile to make
          sure that our guests are satisfied.
        </Text>
        <Text>We hope to see you soon!</Text>
      </AboutContainer>
    </Layout>
  );
};

export default About;
