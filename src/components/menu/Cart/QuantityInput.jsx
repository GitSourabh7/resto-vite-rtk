import React from "react";
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

// Styled components using MUI's styling system
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
  fontSize: "1rem", // Slightly larger font size for better visibility
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
  margin: "0 2px", // Increased margin for better spacing
  padding: "6px 6px",
  outline: 0,
  minWidth: 0,
  width: "3rem", // Slightly smaller width to fit better
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
  fontSize: "0.875rem", // Smaller font size
  boxSizing: "border-box",
  lineHeight: 1.5,
  border: 0,
  borderRadius: "999px",
  color: (theme) =>
    theme.palette.mode === "dark" ? theme.blue[300] : theme.blue[600],
  background: "transparent",
  width: "28px", // Smaller button size
  height: "28px", // Smaller button size
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

// CustomNumberInput component
const CustomNumberInput = React.forwardRef(function CustomNumberInput(
  props,
  ref
) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);

  const handleIncrement = () => {
    dispatch(increaseQuantity({ id: props.id }));
    axios.post("http://localhost:3000/cart/increase-quantity", {
      user_id: userId,
      product_id: props.id,
    });
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity({ id: props.id }));
    axios.post("http://localhost:3000/cart/decrease-quantity", {
      user_id: userId,
      product_id: props.id,
    });
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
      {...props}
      ref={ref}
    />
  );
});

CustomNumberInput.propTypes = {
  id: PropTypes.string.isRequired,
};

// QuantityInput component
export default function QuantityInput({ menu }) {
  return (
    <CustomNumberInput
      aria-label="Quantity Input"
      min={1}
      max={5}
      value={menu.quantity || 1} // Set a default value of 1 if menu.quantity is falsy
      id={menu.id}
    />
  );
}

QuantityInput.propTypes = {
  menu: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
