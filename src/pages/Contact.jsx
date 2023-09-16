import Layout from "../components/layout/Layout/Layout";
import {
  Box,
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
          <Typography variant="h4">Contact my Restaurant</Typography>
          <Typography sx={{ fontSize: "1.2rem" }}>
            Pari atur adversarial examples quis enim quis VAEs irure chatbots
            machine learning feature extraction AI in entertainment adversarial
            examples Dolor neural architecture search sit ETL principal
            component analysis deserunt voluptate culpa.
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
                      1800 12 3456 (Toll-Free)
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <MailIcon sx={{ color: "skyblue", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      help@resto.com
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <CallIcon sx={{ color: "green", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      +91 9876543210
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ p: 1, display: "flex", alignItems: "center" }}
                  >
                    <AccessTimeIcon sx={{ color: "violet", fontSize: 40 }} />
                    <Typography sx={{ pl: 2, fontSize: 20 }}>
                      10.00 am to 10.00 pm
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
