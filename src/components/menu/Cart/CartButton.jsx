import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Dialog, IconButton, Slide, Toolbar, Typography } from "@mui/material";
import {
  Close as CloseIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";

import {
  CartButtonContainer,
  CartBadge,
  StyledButton,
  AppBarContainer,
  BoxContainer,
  ListContainer,
} from "./CartButton.styled"; // Import the styled components

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
          <ListContainer>
            <CartHeader count={cartItems.length} />
            <CartItemList cartItems={cartItems} />
          </ListContainer>
          <CartSummary cartItems={cartItems} />
        </BoxContainer>
      </Dialog>
    </CartButtonContainer>
  );
}

export default CartButton;
