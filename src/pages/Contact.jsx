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

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            my: 5,
            mx: "5%",
            display: "flex",
            flexDirection: "column",
            "& h4": { fontWeight: "bold", mb: 2 },
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>
            At Resto, we&apos;re committed to providing you with the best dining
            experiences around the world. Your feedback, questions, and
            suggestions are important to us. Feel free to get in touch with our
            dedicated team through the following channels:
          </Typography>
          <br />
          <Typography variant="h4">Customer Support:</Typography>
          <Typography sx={{ fontSize: "1.2rem", marginTop: "-1rem" }}>
            Our customer support team is available 24/7 to assist you with any
            inquiries, reservations, or concerns you may have. Don&apos;t
            hesitate to reach out:
          </Typography>
        </Box>
        <Box
          sx={{
            m: 3,
            mx: "5%",
            width: "30%",
            "@media (max-width: 900px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer sx={{ borderRadius: "15px" }} component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "#1976d2", color: "white" }}
                    align="center"
                  >
                    <Typography sx={{ fontSize: 25 }}>
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
                    <SupportAgentIcon sx={{ color: "red", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      <Link
                        sx={{ textDecoration: "none" }}
                        href="tel:1800 12 3456"
                      >
                        1800 12 3456
                      </Link>
                      <em> (Toll-Free)</em>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <MailIcon sx={{ color: "skyblue", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      <Link href="mailto:help@resto.com">help@resto.com</Link>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <CallIcon sx={{ color: "green", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      <Link
                        sx={{ textDecoration: "none" }}
                        href="tel:+91 9876543210"
                      >
                        +91 9876543210
                      </Link>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <AccessTimeIcon sx={{ color: "violet", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      10.00 am to 10.00 pm <em>(Office Hours)</em>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            my: 5,
            mx: "5%",
            display: "flex",
            flexDirection: "column",
            "& h4": { fontWeight: "bold", mb: 2 },
          }}
        >
          <Typography variant="h4">Restaurant Partners:</Typography>
          <Typography sx={{ fontSize: "1.2rem", marginTop: "-1rem" }}>
            If you&apos;re a restaurant owner interested in partnering with
            Resto, or if you have any business-related inquiries, please contact
            our restaurant partnership team:
            <Typography sx={{ fontSize: "1.2rem" }}>
              Email:
              <Link
                sx={{ textDecoration: "none" }}
                href="mailto:partners@domain.com"
              >
                partners@domain.com
              </Link>
              , Phone:
              <Link sx={{ textDecoration: "none" }} href="tel:+91 9876543210">
                +91 9876543210
              </Link>
            </Typography>
          </Typography>
          <br />
          <Typography variant="h4"> Feedback and Suggestions: </Typography>
          <Typography sx={{ fontSize: "1.2rem", marginTop: "-1rem" }}>
            We value your feedback and suggestions as they help us improve our
            services. If you have any ideas, comments, or recommendations,
            please send them to: Email:{" "}
            <Link sx={{ textDecoration: "none" }} href="feedback@resto.com">
              feedback@resto.com
            </Link>
          </Typography>
          <br />
          <Typography variant="h4"> Visit Us: </Typography>
          <Typography sx={{ fontSize: "1.2rem", marginTop: "-1rem" }}>
            If you&apos;re in the neighborhood, we&apos;d love to meet you in
            person. Here&apos;s our headquarters&apos;
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
          </Typography>
          <br />
          <Typography sx={{ fontSize: "1.2rem" }}>
            Resto is dedicated to providing exceptional dining experiences, and
            we&apos;re here to assist you in any way we can. Thank you for
            choosing Resto, where global flavors meet your plate.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
