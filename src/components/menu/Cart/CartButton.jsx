import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Delete } from "@mui/icons-material";
import { Badge } from "@mui/material";
import CartSummary from "./CartSummary";

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

  const handleRemove = () => {
    console.log("Called remove");
  };

  return (
    <div>
      <Badge
        badgeContent={stateValue ? stateValue.length : 0}
        color="primary"
        sx={{ position: "fixed", my: "13rem", mx: "5rem" }}
      ></Badge>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ position: "fixed", my: "13rem", borderRadius: "20px" }}
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
            {/* Cart Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#00000022",
                height: "3rem",
                margin: "10px",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{ mx: "1em", fontSize: "1.2em", fontWeight: "800" }}
              >
                Cart : ({stateValue.length})
              </Typography>
            </Box>
            {/* Cart Items list */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "-webkit-fill-available",
              }}
            >
              {/* Item List */}
              {stateValue.length ? (
                stateValue.map((menu) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "#00000022",
                      mx: "10px",
                      my: "1px",
                      borderRadius: "5px",
                    }}
                    key={menu.id}
                  >
                    <Box
                      component="img"
                      sx={{
                        m: 2,
                        borderRadius: "10px",
                        height: 120,
                        width: 180,
                      }}
                      alt={menu.name}
                      src={menu.image}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "10px",
                        width: "-webkit-fill-available",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.2em",
                          fontWeight: "400",
                          minWidth: "150px",
                        }}
                      >
                        {menu.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          mx: 2,
                          width: "200px",
                        }}
                      >
                        <Box
                          sx={{ ml: "5", fontSize: "1.2em", fontWeight: "400" }}
                        >
                          ₹ {menu.price}
                        </Box>
                        <Button
                          variant="outlined"
                          startIcon={<Delete />}
                          color="error"
                          size="small"
                          onClick={() => handleRemove(menu)}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box>
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Cart is empty
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
          {/* Cart Summary */}
          <CartSummary cartItems={stateValue} />
        </Box>
      </Dialog>
    </div>
  );
}
