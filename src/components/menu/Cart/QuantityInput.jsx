import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../features/cartSlice";
import axios from "axios";
import { styled } from "@mui/system";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const StyledInputRoot = styled("div")({
  fontFamily: "IBM Plex Sans, sans-serif",
  fontWeight: 400,
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.grey[300] : theme.grey[500],
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
});

const StyledInput = styled("input")({
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 400,
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.grey[300] : theme.grey[900],
  background: (theme) =>
    theme.palette.mode === "dark" ? theme.grey[900] : "#fff",
  border: (theme) =>
    `1px solid ${
      theme.palette.mode === "dark" ? theme.grey[700] : theme.grey[200]
    }`,
  borderRadius: "40px",
  margin: "0 2px",
  padding: "3px 3px",
  outline: 0,
  minWidth: 0,
  width: "2.5rem",
  textAlign: "center",
  "&:hover": {
    borderColor: (theme) => theme.blue[400],
  },
  "&:focus": {
    borderColor: (theme) => theme.blue[400],
    boxShadow: (theme) =>
      `0 0 0 3px ${
        theme.palette.mode === "dark" ? theme.blue[500] : theme.blue[200]
      }`,
  },
  "&:focus-visible": {
    outline: 0,
  },
});

const StyledButton = styled("button")({
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "0.875rem",
  boxSizing: "border-box",
  lineHeight: 1.5,
  border: 0,
  borderRadius: "999px",
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.blue[300] : theme.blue[600],
  background: "transparent",
  width: "28px",
  height: "28px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "120ms",
  "&:hover": {
    background: (theme) =>
      theme.palette.mode === "dark" ? theme.blue[800] : theme.blue[100],
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: 0,
  },
  "&.increment": {
    order: 1,
  },
});

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
          ? "http://localhost:3000/cart/increase-quantity"
          : "http://localhost:3000/cart/decrease-quantity";

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
