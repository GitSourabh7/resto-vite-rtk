/* eslint-disable react/prop-types */
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItems } from "../Cart/CartSlice";

const CardButtons = ({ item }) => {
  const dispatch = useDispatch();

  // Use the selector to get the cart items
  const cartItems = useSelector(selectCartItems);

  // Check if the item is in the cart
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  const handleToggleCart = () => {
    if (isItemInCart) {
      // If the item is already in the cart, remove it
      dispatch(removeFromCart(item));
    } else {
      // If the item is not in the cart, add it
      dispatch(addToCart(item));
    }
  };

  return (
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
      <Box
        sx={{
          borderStyle: "solid",
          borderWidth: "2px",
          borderRadius: "15px",
          borderColor: isItemInCart ? "red" : "#1976d2",
        }}
      >
        <Button sx={{ border: "none !important" }} onClick={handleToggleCart}>
          <Typography sx={{ color: isItemInCart ? "red" : undefined }}>
            {isItemInCart ? "Remove" : "Add To Cart"}
          </Typography>
          <ShoppingCartIcon
            fontSize="large"
            sx={{ color: isItemInCart ? "red" : undefined }}
          />
        </Button>
      </Box>
      <Button sx={{ border: "none !important" }}>
        <FavoriteIcon fontSize="large" />
      </Button>
    </ButtonGroup>
  );
};

export default CardButtons;
