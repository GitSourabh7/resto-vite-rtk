// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Function to get cart items from local storage or provide an empty array
const getCartItemsFromLocalStorage = () => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? JSON.parse(storedCartItems) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCartItemsFromLocalStorage(), // Initialize with local storage data
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, create a new array with updated quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        state.items = updatedItems;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Update local storage after modifying the cart
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      // Update local storage after modifying the cart
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increaseQuantity: (state, action) => {
      const itemToIncrease = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;

        // Update local storage after modifying the cart
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemToDecrease) {
        if (itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1;
        } else {
          // Remove the item from the cart if its quantity becomes 0
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }

        // Update local storage after modifying the cart
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
