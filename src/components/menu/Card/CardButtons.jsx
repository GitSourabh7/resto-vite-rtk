import { Button, ButtonGroup } from "@mui/material";

//Icons
import ShareIcon from "@mui/icons-material/Share";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardButtons = () => {
  const handleAddToCart = () => {
    console.log("Clicked on Handle Cart");
  };

  return (
    <ButtonGroup
      variant="text"
      aria-label="text button group"
      sx={{
        position: "relative",
        bottom: "30px",
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
      <Button sx={{ border: "none !important" }}>
        <FavoriteIcon fontSize="large" />
      </Button>
    </ButtonGroup>
  );
};

export default CardButtons;
