/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const CartSummary = ({ cartItems }) => {
  const calculateSubTotal = () => {
    let priceArray = [];
    for (let k = 0; k < cartItems.length; k++) {
      priceArray.push(cartItems[k].price);
    }
    let subTotal = priceArray.reduce((partialSum, a) => partialSum + a, 0);
    return subTotal;
  };

  return cartItems.length ? (
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
        <Typography>₹ {calculateSubTotal(cartItems)}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Delivery Charges</Typography>
        <Typography>₹ {cartItems.length !== 0 ? 80 : 0}</Typography>
      </Box>
      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Subtotal</Typography>
        <Typography>
          ₹ {cartItems.length !== 0 ? calculateSubTotal(cartItems) + 80 : 0}
        </Typography>
      </Box>
      <Button variant="contained" sx={{ mt: 3 }}>
        Checkout
      </Button>
    </Box>
  ) : (
    <Box></Box>
  );
};

export default CartSummary;
