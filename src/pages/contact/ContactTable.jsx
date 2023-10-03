import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

//MUI Icons
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {
  StyledTableContainer,
  StyledTableHeaderCell,
  StyledTableCell,
  StyledTypography,
  StyledLink,
} from "./ContactTable.styled";

const ContactTable = () => {
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="contact table">
        <TableHead>
          <TableRow>
            <StyledTableHeaderCell>
              <Typography sx={{ fontSize: 25 }}>Contact Details</Typography>
            </StyledTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <SupportAgentIcon sx={{ color: "red", fontSize: "40px" }} />
              <StyledTypography>
                <StyledLink href="tel:1800 12 3456">1800 12 3456</StyledLink>
                <em> (Toll-Free)</em>
              </StyledTypography>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <MailIcon sx={{ color: "skyblue", fontSize: "40px" }} />
              <StyledTypography>
                <StyledLink href="mailto:help@resto.com">
                  help@resto.com
                </StyledLink>
              </StyledTypography>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <CallIcon sx={{ color: "green", fontSize: "40px" }} />
              <StyledTypography>
                <StyledLink href="tel:+91 9876543210">
                  +91 9876543210
                </StyledLink>
              </StyledTypography>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <AccessTimeIcon sx={{ color: "violet", fontSize: "40px" }} />
              <StyledTypography>
                10.00 am to 10.00 pm <em>(Office Hours)</em>
              </StyledTypography>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ContactTable;
