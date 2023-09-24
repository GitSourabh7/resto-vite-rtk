/* eslint-disable react/prop-types */
import { Box, Typography, Button } from "@mui/material";

const CartSummary = ({ cartItems }) => {
  const calculateSubTotal = () => {
    let subTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      subTotal += cartItems[i].price * cartItems[i].quantity;
    }
    return subTotal;
  };

  // Check if cartItems array is empty, and if so, don't render the component
  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#00000022",
        margin: "10px",
        padding: 2,
        borderRadius: "5px",
        width: "20%",
        height: "220px",
      }}
    >
      <Typography
        sx={{
          mb: 2,
          textDecoration: "underline",
          fontSize: "1.2em",
          fontWeight: "800",
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
        <Typography>₹ {cartItems.length !== 0 ? 80 : 0}</Typography>
      </Box>
      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Subtotal</Typography>
        <Typography>
          ₹ {calculateSubTotal() + (cartItems.length !== 0 ? 80 : 0)}
        </Typography>
      </Box>
      <Button variant="contained" sx={{ mt: 3 }}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
