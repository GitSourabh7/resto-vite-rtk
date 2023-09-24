/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { Box, Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { removeFromCart } from "./CartSlice";
import QuantityInput from "./QuantityInput";

import "@lottiefiles/lottie-player";

const CartItemList = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleRemove = (menu) => {
    // Dispatch the removeFromCart action to remove the item from the cart
    dispatch(removeFromCart({ id: menu.id }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "-webkit-fill-available",
      }}
    >
      {/* Item List */}
      {cartItems.length ? (
        cartItems.map((menu) => {
          const totalPrice = menu.price * menu.quantity; // Calculate the total price

          return (
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
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "1.2em",
                      fontWeight: "400",
                      minWidth: "100px",
                    }}
                  >
                    {menu.name}
                  </Typography>
                  <QuantityInput sx={{ maxWidth: "80px" }} menu={menu} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    mx: 2,
                    minWidth: "300px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1em",
                      fontWeight: "400",
                      fontStyle: "italic",
                    }}
                  >
                    ₹ {menu.price}/dish
                  </Typography>
                  <Box sx={{ ml: "5", fontSize: "1.2em", fontWeight: "400" }}>
                    ₹ {totalPrice}
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
          );
        })
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/3fc835c3-fd54-46dc-a5b0-4529cbfdd072/vVzF7i3u3k.json"
            style={{ width: "680px" }}
          ></lottie-player>
          <Typography variant="h4">Cart is empty</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CartItemList;
