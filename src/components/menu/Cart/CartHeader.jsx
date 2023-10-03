import PropTypes from "prop-types";
import { CartHeaderWrapper, CartHeaderText } from "./CartHeader.styled"; // Import the styled components

const CartHeader = ({ count }) => {
  return (
    <CartHeaderWrapper>
      <CartHeaderText>Cart : ({count})</CartHeaderText>
    </CartHeaderWrapper>
  );
};

CartHeader.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CartHeader;
