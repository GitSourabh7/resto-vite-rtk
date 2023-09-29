import PropTypes from "prop-types"; // Import PropTypes at the top of your file
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
                backgroundColor: "#f0f0f0", // Use a lighter background color
                padding: "10px",
                borderRadius: "5px",
                margin: "10px",
              }}
              key={menu.id}
            >
              <img
                src={menu.image}
                alt={menu.name}
                style={{
                  marginRight: "20px", // Add some spacing between the image and content
                  borderRadius: "10px",
                  height: "100px",
                  width: "160px",
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "400",
                      flex: 1,
                    }}
                  >
                    {menu.name}
                  </Typography>
                  <QuantityInput menu={menu} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "1em",
                      fontStyle: "italic",
                    }}
                  >
                    ₹ {menu.price}/dish
                  </Typography>
                  <div style={{ fontSize: "1.2em", fontWeight: "400" }}>
                    ₹ {totalPrice}
                  </div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<Delete />}
                    onClick={() => handleRemove(menu)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
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

// Add props validation using PropTypes
CartItemList.propTypes = {
  userId: PropTypes.number.isRequired, // userId is expected to be a number and is required
};

// Provide a default value for userId if it's not provided
CartItemList.defaultProps = {
  userId: 1, // You can set the default value to whatever you prefer
};

export default CartItemList;
