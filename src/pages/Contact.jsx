import styled from "styled-components";
import Layout from "../components/layout/Layout";
import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// Icons
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ContactContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2% 2%;
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin: 1rem 0 0.5rem 0;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
`;

const OuterTableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

const ContactLink = styled(Link)`
  text-decoration: none;
`;

const FontSize = "1.2rem"; // Common font size

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <SectionText>
          At Resto, we&apos;re committed to providing you with the best dining
          experiences around the world. Your feedback, questions, and
          suggestions are important to us. Feel free to get in touch with our
          dedicated team through the following channels:
        </SectionText>
        <br />
        <SectionHeader>Customer Support:</SectionHeader>
        <SectionText>
          Our customer support team is available 24/7 to assist you with any
          inquiries, reservations, or concerns you may have. Don&apos;t hesitate
          to reach out:
        </SectionText>
        <OuterTableContainer>
          <TableContainer
            sx={{ borderRadius: "20px", width: "100%", maxWidth: "400px" }}
            component={Paper}
          >
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "#1976d2", color: "white" }}
                    align="center"
                  >
                    <Typography sx={{ fontSize: "1.5rem" }}>
                      Contact Details
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <SupportAgentIcon sx={{ color: "red", fontSize: "2rem" }} />
                    <Typography sx={{ pl: 2, fontSize: FontSize }}>
                      <ContactLink href="tel:1800 12 3456">
                        1800 12 3456
                      </ContactLink>
                      <em> (Toll-Free)</em>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <MailIcon sx={{ color: "skyblue", fontSize: "2rem" }} />
                    <Typography sx={{ pl: 2, fontSize: FontSize }}>
                      <ContactLink href="mailto:help@resto.com">
                        help@resto.com
                      </ContactLink>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <CallIcon sx={{ color: "green", fontSize: "2rem" }} />
                    <Typography sx={{ pl: 2, fontSize: FontSize }}>
                      <ContactLink href="tel:+91 9876543210">
                        +91 9876543210
                      </ContactLink>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <AccessTimeIcon
                      sx={{ color: "violet", fontSize: "2rem" }}
                    />
                    <Typography sx={{ pl: 2, fontSize: FontSize }}>
                      10.00 am to 10.00 pm <em>(Office Hours)</em>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </OuterTableContainer>
        <SectionHeader>Restaurant Partners:</SectionHeader>
        <SectionText>
          If you&apos;re a restaurant owner interested in partnering with Resto,
          or if you have any business-related inquiries, please contact our
          restaurant partnership team:
        </SectionText>
        <SectionText>
          Email:{" "}
          <ContactLink href="mailto:partners@domain.com">
            partners@domain.com
          </ContactLink>
          , Phone:{" "}
          <ContactLink href="tel:+91 9876543210">+91 9876543210</ContactLink>
        </SectionText>
        <br />
        <SectionHeader> Feedback and Suggestions: </SectionHeader>
        <SectionText>
          We value your feedback and suggestions as they help us improve our
          services. If you have any ideas, comments, or recommendations, please
          send them to: Email:{" "}
          <ContactLink href="mailto:feedback@resto.com">
            feedback@resto.com
          </ContactLink>
        </SectionText>
        <br />
        <SectionHeader> Visit Us: </SectionHeader>
        <SectionText>
          If you&apos;re in the neighborhood, we&apos;d love to meet you in
          person. Here&apos;s our headquarters&apos;
        </SectionText>
        <div>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Our Address
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", fontStyle: "italic" }}
          >
            123 Main Street,
            <br />
            Bangalore,
            <br />
            Karnataka, 560 560
          </Typography>
        </div>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
