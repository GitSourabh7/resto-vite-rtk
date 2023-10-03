import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../features/cartSlice";
import axios from "axios";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { apiUrl } from "../../../../apiConfig";

import {
  StyledInputRoot,
  StyledInput,
  StyledButton,
} from "./QuantityInput.styled";

const CustomNumberInput = ({ id, value }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);

  const handleIncrement = () => {
    dispatch(increaseQuantity({ id }));
    updateQuantityOnServer(id, userId, "increase");
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity({ id }));
    updateQuantityOnServer(id, userId, "decrease");
  };

  const updateQuantityOnServer = async (productId, userId, action) => {
    try {
      const url =
        action === "increase"
          ? apiUrl + "/cart/increase-quantity"
          : apiUrl + "/cart/decrease-quantity";

      const response = await axios.post(url, {
        user_id: userId,
        product_id: productId,
      });

      if (response.status === 200) {
        console.log("Quantity updated on the server.");
      } else {
        console.error("Error updating quantity on the server.");
      }
    } catch (error) {
      console.error("Error updating quantity on the server:", error);
    }
  };

  return (
    <NumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon onClick={handleIncrement} />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon onClick={handleDecrement} />,
          className: "decrement",
        },
      }}
      min={1}
      max={5}
      value={value || 1}
      id={id}
      aria-label="Quantity Input"
    />
  );
};

CustomNumberInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
};

const QuantityInput = ({ menu }) => {
  return <CustomNumberInput id={menu.id} value={menu.quantity} />;
};

QuantityInput.propTypes = {
  menu: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuantityInput;
