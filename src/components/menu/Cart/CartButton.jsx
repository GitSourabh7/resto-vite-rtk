import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  AppBar,
  Box,
  Badge,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Close as CloseIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CartButtonContainer = styled.div`
  position: relative;
`;

const CartBadge = styled(Badge)`
  margin: 20px 10px;
  z-index: 1;
`;

const StyledButton = styled(Button)`
  border-radius: 20px !important;
  margin: 3px;
`;

const AppBarContainer = styled(AppBar)`
  position: relative;
`;

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

function CartButton() {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const authenticated = useSelector((state) => !!state.user.id); // Check if the user is authenticated

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CartButtonContainer>
      <CartBadge
        badgeContent={cartItems ? cartItems.length : 0}
        color="primary"
      >
        <StyledButton
          variant="outlined"
          onClick={handleClickOpen}
          disabled={!authenticated}
        >
          <ShoppingCartIcon />
          Cart
        </StyledButton>
      </CartBadge>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBarContainer position="relative">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flex: 1 }}>
              Shopping Cart
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBarContainer>
        <BoxContainer>
          <LeftBox>
            <CartHeader count={cartItems.length} />
            <CartItemList cartItems={cartItems} />
          </LeftBox>
          <CartSummary cartItems={cartItems} />
        </BoxContainer>
      </Dialog>
    </CartButtonContainer>
  );
}

export default CartButton;
