import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Import color variables from your theme.js file
import { colors } from "../../../styles/theme.styled";

export const StyledButtonGroup = styled(ButtonGroup)`
  top: -50px;
  position: relative;
  padding: 10px;
  display: flex !important;
  justify-content: space-evenly !important;
`;

export const ShareButton = styled(Button)`
  border: none !important;
`;

export const CartButton = styled(Button)`
  border: 2px solid transparent !important;
  border-radius: 40px !important;
  color: ${(props) =>
    props.isCartButtonDisabled
      ? colors.disabledColor
      : props.isItemInCart
      ? colors.secondaryColor
      : colors.primaryColor} !important;
  &:hover {
    border: 3px solid
      ${(props) =>
        props.isCartButtonDisabled
          ? colors.disabledColor
          : props.isItemInCart
          ? colors.secondaryColor
          : colors.primaryColor} !important;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${(props) =>
    props.isCartButtonDisabled
      ? colors.disabledColor
      : props.isItemInCart
      ? colors.secondaryColor
      : colors.primaryColor} !important;
`;

export const CustomShoppingCartIcon = styled(ShoppingCartIcon)`
  color: ${(props) =>
    props.isItemInCart
      ? colors.secondaryColor
      : props.isCartButtonDisabled
      ? colors.disabledColor
      : colors.primaryColor};
`;
