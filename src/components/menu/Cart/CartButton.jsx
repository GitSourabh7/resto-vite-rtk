import * as React from "react";

// Components
import {
  AppBar,
  Badge,
  Box,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";

// Icons
import {
  Close as CloseIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

// Components
import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

var stateValue = [
  {
    id: 1,
    name: "Tempura",
    category: "japanese",
    description: "This dish is very delicious and very famous in Japan.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690219271/resto/menu/japanese/tempura.jpg",
    price: 200,
  },
  {
    id: 2,
    name: "Ramen",
    category: "japanese",
    description: "This dish is very delicious and very famous in Japan.",
    image:
      "https://res.cloudinary.com/dduqxunnf/image/upload/v1690219188/resto/menu/japanese/ramen.jpg",
    price: 300,
  },
];

export default function CartButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Badge
        badgeContent={stateValue ? stateValue.length : 0}
        color="primary"
        sx={{ position: "fixed", my: 30, mx: "6rem", zIndex: 1 }}
      ></Badge>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ position: "fixed", my: 30, mx: "1rem", borderRadius: "20px" }}
      >
        <ShoppingCartIcon />
        Cart
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              Shopping Cart
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
            <CartHeader count={stateValue.length} />
            <CartItemList itemList={stateValue} />
          </Box>
          <CartSummary cartItems={stateValue} />
        </Box>
      </Dialog>
    </div>
  );
}
