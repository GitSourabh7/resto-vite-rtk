import PropTypes from "prop-types";
import { Button, ButtonGroup, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItems } from "../Cart/CartSlice";
import { selectUser } from "../../common/userSlice";

const CardButtons = ({ item }) => {
  const dispatch = useDispatch();

  // Use the selector to get the cart items
  const cartItems = useSelector(selectCartItems);

  // Check if the item is in the cart
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  // Use the selector to get the user authentication status
  const user = useSelector(selectUser);
  const isAuthenticated = !!user.id; // Check if the user is authenticated

  const handleToggleCart = () => {
    if (!isAuthenticated) {
      // If not authenticated, do nothing
      return;
    }

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
      <Button sx={{ border: "none !important", borderRadius: "999px" }}>
        <ShareIcon fontSize="large" />
      </Button>
      <Button
        sx={{
          border: `2px solid ${isItemInCart ? "red" : "#1976d2"} !important`,
          borderRadius: "999px", // Rounded shape
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
      <Button
        sx={{ border: "none !important", borderRadius: "999px" }}
        disabled={!isAuthenticated}
      >
        <FavoriteIcon fontSize="large" />
      </Button>
    </ButtonGroup>
  );
};

// Prop type validation
CardButtons.propTypes = {
  item: PropTypes.object.isRequired, // Ensure 'item' prop is an object
};

export default CardButtons;
