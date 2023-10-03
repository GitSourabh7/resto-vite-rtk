import Layout from "../../components/layout/Layout";
import ContactTable from "./ContactTable";
import {
  Container,
  Section,
  SubHeading,
  Paragraph,
  AddressContainer,
  AddressTitle,
  AddressText,
} from "./Contact.styled";

// Contact component
const Contact = () => {
  return (
    <Layout>
      <Container>
        <Section>
          <Paragraph>
            At Resto, we&apos;re committed to providing you with the best dining
            experiences around the world. Your feedback, questions, and
            suggestions are important to us. Feel free to get in touch with our
            dedicated team through the following channels:
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Customer Support:</SubHeading>
          <Paragraph>
            Our customer support team is available 24/7 to assist you with any
            inquiries, reservations, or concerns you may have. Don&apos;t
            hesitate to reach out:
          </Paragraph>
          <ContactTable />
        </Section>
        <Section>
          <SubHeading>Restaurant Partners:</SubHeading>
          <Paragraph>
            If you&apos;re a restaurant owner interested in partnering with
            Resto, or if you have any business-related inquiries, please contact
            our restaurant partnership team:
          </Paragraph>
          <Paragraph>
            Email: <a href="mailto:partners@domain.com">partners@domain.com</a>,
            Phone: <a href="tel:+91 9876543210">+91 9876543210</a>
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Feedback and Suggestions:</SubHeading>
          <Paragraph>
            We value your feedback and suggestions as they help us improve our
            services. If you have any ideas, comments, or recommendations,
            please send them to: Email:{" "}
            <a href="mailto:feedback@resto.com">feedback@resto.com</a>
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Visit Us:</SubHeading>
          <Paragraph>
            If you&apos;re in the neighborhood, we&apos;d love to meet you in
            person. Here&apos;s our headquarters:
          </Paragraph>
          <AddressContainer>
            <AddressTitle>Our Address</AddressTitle>
            <AddressText>
              123 Main Street,
              <br />
              Bangalore,
              <br />
              Karnataka, 560 560
            </AddressText>
          </AddressContainer>
        </Section>
      </Container>
    </Layout>
  );
};

export default Contact;
