/* eslint-disable react/prop-types */
import { Box, Typography, Button } from "@mui/material";

const CartSummary = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return null;
  }

  const calculateSubTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const deliveryCharges = cartItems.length !== 0 ? 80 : 0;
  const subTotal = calculateSubTotal() + deliveryCharges;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f0f0f0",
        margin: "10px",
        padding: 2,
        borderRadius: "5px",
        width: "100%", // Use relative width
        maxWidth: "300px", // Set a maximum width if needed
      }}
    >
      <Typography
        variant="h6" // Use Typography variant
        sx={{
          mb: 2,
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        Cart Summary
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Items</Typography>
        <Typography>₹ {calculateSubTotal()}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Delivery Charges</Typography>
        <Typography>₹ {deliveryCharges}</Typography>
      </Box>
      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Subtotal</Typography>
        <Typography>₹ {subTotal}</Typography>
      </Box>
      <Button variant="contained" sx={{ mt: 3 }}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
