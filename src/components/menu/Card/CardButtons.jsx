import { Button, ButtonGroup } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Cart/CartSlice";

// eslint-disable-next-line react/prop-types
const CardButtons = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    console.log("Item added to cart:", item);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item)); // Dispatch the removeFromCart action with the item
    console.log("Item removed from cart:", item);
  };

  return (
    <ButtonGroup
      variant="text"
      aria-label="text button group"
      sx={{
        top: "-55px",
        position: "relative",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Button sx={{ border: "none !important" }}>
        <ShareIcon fontSize="large" />
      </Button>
      <Button sx={{ border: "none !important" }} onClick={handleAddToCart}>
        <ShoppingCartIcon fontSize="large" />
      </Button>
      <Button sx={{ border: "none !important" }} onClick={handleRemoveFromCart}>
        <FavoriteIcon fontSize="large" />
      </Button>
    </ButtonGroup>
  );
};

export default CardButtons;
