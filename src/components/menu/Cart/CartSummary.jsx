import PropTypes from "prop-types";
import styled from "styled-components";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  margin: 10px;
  padding: 16px;
  border-radius: 5px;
  width: 100%;
  max-width: 250px;
`;

const CartSummaryTitle = styled(Typography)`
  margin-bottom: 16px;
  text-decoration: underline;
  font-weight: bold;
`;

const SummaryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckoutButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

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
    <CartSummaryContainer>
      <CartSummaryTitle variant="h6">Cart Summary</CartSummaryTitle>
      <SummaryItemContainer>
        <Typography>Items</Typography>
        <Typography>₹ {calculateSubTotal()}</Typography>
      </SummaryItemContainer>
      <SummaryItemContainer>
        <Typography>Delivery Charges</Typography>
        <Typography>₹ {deliveryCharges}</Typography>
      </SummaryItemContainer>
      <hr />
      <SummaryItemContainer>
        <Typography>Subtotal</Typography>
        <Typography>₹ {subTotal}</Typography>
      </SummaryItemContainer>
      <CheckoutButtonContainer
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="contained" sx={{ mt: 3, width: "80%" }}>
          Checkout
        </Button>
      </CheckoutButtonContainer>
    </CartSummaryContainer>
  );
};

CartSummary.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default CartSummary;
