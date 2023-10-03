import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { removeFromCart } from "../../../features/cartSlice";
import QuantityInput from "./QuantityInput";
import "@lottiefiles/lottie-player";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { apiUrl } from "../../../../apiConfig";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
`;

const CartItemContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;

  &:hover {
    scale: 1.02;
  }
`;

const ItemImage = styled.img`
  margin-right: 20px;
  border-radius: 10px;
  height: 100px;
  width: 160px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const RemoveButtonContainer = styled(motion.div)`
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartItemList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.id);

  const handleRemove = async (menu) => {
    try {
      const response = await axios.delete(apiUrl + `/cart/remove-from-cart`, {
        data: {
          user_id: userId,
          product_id: menu.id,
        },
      });

      if (response.status === 200) {
        console.log("Item removed from the database");
        toast.success("Item removed from cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        setTimeout(() => {
          dispatch(removeFromCart({ id: menu.id }));
        }, 1000);
      } else {
        console.error("Error removing item from the database");
        toast.error("Error removing item from cart", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error removing item from the database:", error);
      toast.error("Error removing item from cart", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };

  return (
    <Container>
      {cartItems.length ? (
        cartItems.map((menu) => {
          const totalPrice = menu.price * menu.quantity;
          return (
            <CartItemContainer key={menu.id}>
              <ItemImage src={menu.image} alt={menu.name} />
              <ItemDetails>
                <ItemInfo>
                  <Typography variant="h5" style={{ fontWeight: "400" }}>
                    {menu.name}
                  </Typography>
                  <QuantityInput menu={menu} />
                </ItemInfo>
                <PriceContainer>
                  <Typography style={{ fontSize: "1em", fontStyle: "italic" }}>
                    ₹ {menu.price}/dish
                  </Typography>
                  <div style={{ fontSize: "1.2em", fontWeight: "400" }}>
                    ₹ {totalPrice}
                  </div>
                  <RemoveButtonContainer
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<Delete />}
                      onClick={() => handleRemove(menu)}
                    >
                      Remove
                    </Button>
                  </RemoveButtonContainer>
                </PriceContainer>
              </ItemDetails>
            </CartItemContainer>
          );
        })
      ) : (
        <EmptyCartContainer>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/3fc835c3-fd54-46dc-a5b0-4529cbfdd072/vVzF7i3u3k.json"
            style={{ width: "680px" }}
          ></lottie-player>
          <Typography variant="h4">Cart is Empty</Typography>
        </EmptyCartContainer>
      )}
    </Container>
  );
};

CartItemList.propTypes = {
  userId: PropTypes.number.isRequired,
};

CartItemList.defaultProps = {
  userId: 1,
};

export default CartItemList;
