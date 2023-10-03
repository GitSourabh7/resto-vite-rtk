import { styled } from "@mui/system";
import { Link as MUILink } from "@mui/material";
import { TableCell, TableContainer, Typography } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 15px;
`;

export const StyledTableHeaderCell = styled(TableCell)`
  background-color: #1976d2;
  color: white;
  text-align: center;
`;

export const StyledTableCell = styled(TableCell)`
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const StyledTypography = styled(Typography)`
  margin: 0 10px 0 10px;
  font-size: 20px;
`;

export const StyledLink = styled(MUILink)`
  text-decoration: none;
`;
