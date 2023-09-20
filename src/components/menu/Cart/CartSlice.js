// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // An array to store items in the cart
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
    },

    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Reduce the quantity if it's greater than 1
          existingItem.quantity -= 1;
        } else {
          // Remove the item completely if the quantity is 1 or less
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
