import PropTypes from "prop-types";
import { Button, ButtonGroup, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItems } from "../Cart/CartSlice";
import { selectUser } from "../../common/userSlice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast functions and ToastContainer

import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

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

        const response = await axios.delete(
          "http://localhost:3000/cart/remove-from-cart",
          {
            data: { user_id: user.id, product_id: item.id },
          }
        );

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

        const response = await axios.post(
          "http://localhost:3000/cart/add-to-cart",
          {
            user_id: user.id,
            product_id: item.id,
            product_name: item.name,
            quantity: 1,
          }
        );

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
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        sx={{
          top: "-50px",
          position: "relative",
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button sx={{ border: "none !important" }}>
          <ShareIcon fontSize="large" />
        </Button>
        <Button
          sx={{
            border: `2px solid ${
              !isAuthenticated ? "#929292" : isItemInCart ? "red" : "#1976d2"
            } !important`,
            borderRadius: "40px !important",
          }}
          onClick={handleToggleCart}
          disabled={!isAuthenticated}
        >
          <Typography sx={{ mx: 1, color: isItemInCart ? "red" : undefined }}>
            {isItemInCart ? "Remove" : "Add To Cart"}
          </Typography>
          <ShoppingCartIcon
            fontSize="large"
            sx={{ color: isItemInCart ? "red" : undefined }}
          />
        </Button>
        <Button disabled={!isAuthenticated}>
          <FavoriteIcon fontSize="large" />
        </Button>
      </ButtonGroup>
      <ToastContainer />
    </>
  );
};

CardButtons.propTypes = {
  item: PropTypes.object.isRequired, // Ensure 'item' prop is an object and is required
};

export default CardButtons;
