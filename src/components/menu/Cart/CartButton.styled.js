import styled from "styled-components";
import { Badge, Button, AppBar, Box } from "@mui/material";

export const CartButtonContainer = styled.div`
  position: relative;
`;

export const CartBadge = styled(Badge)`
  margin: 20px 10px;
  z-index: 1;
`;

export const StyledButton = styled(Button)`
  border-radius: 20px !important;
  margin: 3px;
`;

export const AppBarContainer = styled(AppBar)`
  position: relative;
`;

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
