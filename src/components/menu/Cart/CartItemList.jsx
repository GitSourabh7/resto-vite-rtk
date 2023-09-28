/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Box, Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { removeFromCart } from "./CartSlice";
import QuantityInput from "./QuantityInput";

import "@lottiefiles/lottie-player";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cartItems from Redux state
  console.log(cartItems);

  const userId = useSelector((state) => state.user.id); // Get the user object from Redux state

  const handleRemove = async (menu) => {
    try {
      // Make a DELETE request to remove the item from the database
      const response = await axios.delete(
        `http://localhost:3000/cart/remove-from-cart`,
        {
          data: {
            user_id: userId,
            product_id: menu.id,
          },
        }
      );

      if (response.status === 200) {
        // Item successfully removed from the database
        console.log("Item removed from the database");

        // Show a success toast
        toast.success("Item removed from cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Set the display time in milliseconds
        });

        // Delay dispatching the removeFromCart action by 1 second
        setTimeout(() => {
          // Dispatch the removeFromCart action to update the local state
          dispatch(removeFromCart({ id: menu.id }));
        }, 1000); // 1000 milliseconds (1 second) delay
      } else {
        // Handle the error if the request fails
        console.error("Error removing item from the database");

        // Show an error toast
        toast.error("Error removing item from cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000, // Set the display time in milliseconds
        });
      }
    } catch (error) {
      console.error("Error removing item from the database:", error);

      // Show an error toast
      toast.error("Error removing item from cart", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000, // Set the display time in milliseconds
      });
    }
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
                      minWidth: "200px",
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
          <Typography variant="h4">Cart is Empty</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CartItemList;
