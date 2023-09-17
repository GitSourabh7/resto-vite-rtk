/* eslint-disable react/prop-types */
import * as React from "react";

import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";

import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CartDialog = ({ cartItems }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
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
        </AppBar>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
            {/* Cart Header */}
            <CartHeader count={cartItems.length} />
            {/* Cart Items list */}
            <CartItemList itemList={cartItems} />
          </Box>
          {/* Cart Summary */}
          <CartSummary cartItems={cartItems} />
        </Box>
      </Dialog>
    </>
  );
};

export default CartDialog;
