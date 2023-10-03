import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledButtonGroup,
  ShareButton,
  CartButton,
  StyledTypography,
  CustomShoppingCartIcon,
} from "./CardButtons.styled"; // Import the styled components

import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "../../../features/cartSlice";
import { selectUser } from "../../../features/userSlice";
import { apiUrl } from "../../../../apiConfig";

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
            disabled={!isAuthenticated} // Disable the button
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
