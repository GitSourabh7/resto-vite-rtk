import PropTypes from "prop-types";
import styled from "styled-components";

const CartHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #00000022;
  height: 3rem;
  margin: 10px;
  border-radius: 5px;
`;

const CartHeaderText = styled.p`
  margin-left: 1em;
  font-size: 1.2em;
  font-weight: 800;
`;

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
