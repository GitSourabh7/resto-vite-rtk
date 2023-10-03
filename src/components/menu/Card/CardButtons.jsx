import PropTypes from "prop-types";
import styled from "styled-components";
import { Button, ButtonGroup, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "../../../features/cartSlice";
import { selectUser } from "../../../features/userSlice";
import axios from "axios";
import { motion } from "framer-motion";
import { apiUrl } from "../../../../apiConfig";

// Toastify
import { toast, ToastContainer } from "react-toastify"; // Import toast functions and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

// Import color variables from your theme.js file
import { colors } from "../../../styles/theme.styled";

const StyledButtonGroup = styled(ButtonGroup)`
  top: -50px;
  position: relative;
  padding: 10px;
  display: flex !important;
  justify-content: space-evenly !important;
`;

const ShareButton = styled(Button)`
  border: none !important;
`;

const CartButton = styled(Button)`
  border: ${(props) =>
    `2px solid ${
      props.isCartButtonDisabled
        ? colors.disabledColor
        : props.isItemInCart
        ? colors.secondaryColor
        : colors.primaryColor
    } !important`};
  border-radius: 40px !important;
`;

// Styled Typography component
const StyledTypography = styled(Typography)`
  color: ${(props) =>
    props.isCartButtonDisabled
      ? colors.disabledColor
      : props.isItemInCart
      ? colors.secondaryColor
      : colors.primaryColor} !important;
`;

// Styled component for ShoppingCartIcon
const CustomShoppingCartIcon = styled(ShoppingCartIcon)`
  color: ${(props) =>
    props.isItemInCart
      ? colors.secondaryColor
      : props.isCartButtonDisabled
      ? colors.disabledColor
      : colors.primaryColor};
`;

const CardButtons = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const user = useSelector(selectUser);
  const isAuthenticated = !!user.id;

  const handleToggleCart = async () => {
    if (!isAuthenticated) {
      return;
    }

    if (isItemInCart) {
      try {
        dispatch(removeFromCart(item));

        const response = await axios.delete(apiUrl + "/cart/remove-from-cart", {
          data: { user_id: user.id, product_id: item.id },
        });

        // Show a success toast
        toast.success("Item removed from cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Set the display time in milliseconds
        });

        console.log(
          `Remove from Cart Response Status: ${response.status} - ${response.statusText}`
        );
      } catch (error) {
        console.error("Remove from Cart Error:", error);
        // Show an error toast
        toast.error("Error removing item from cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Set the display time in milliseconds
        });
      }
    } else {
      try {
        dispatch(addToCart(item));

        const response = await axios.post(apiUrl + "/cart/add-to-cart", {
          user_id: user.id,
          product_id: item.id,
          product_name: item.name,
          quantity: 1,
        });

        // Show a success toast
        toast.success("Item added to cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Set the display time in milliseconds
        });

        console.log(
          `Add to Cart Response Status: ${response.status} - ${response.statusText}`
        );
      } catch (error) {
        console.error("Add to Cart Error:", error);
        // Show an error toast
        toast.error("Error adding item to cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Set the display time in milliseconds
        });
      }
    }
  };

  return (
    <>
      <StyledButtonGroup variant="text" aria-label="button group">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ShareButton>
            <ShareIcon fontSize="large" />
          </ShareButton>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <CartButton
            isItemInCart={isItemInCart}
            isCartButtonDisabled={!isAuthenticated}
            onClick={handleToggleCart}
          >
            <StyledTypography
              isCartButtonDisabled={!isAuthenticated}
              isItemInCart={isItemInCart}
            >
              {isItemInCart ? "Remove" : "Add To Cart"}
            </StyledTypography>
            <CustomShoppingCartIcon
              isCartButtonDisabled={!isAuthenticated}
              isItemInCart={isItemInCart}
              fontSize="large"
            />
          </CartButton>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button disabled={!isAuthenticated}>
            <FavoriteIcon fontSize="large" />
          </Button>
        </motion.div>
      </StyledButtonGroup>
      <ToastContainer />
    </>
  );
};

CardButtons.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardButtons;
