// src/features/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [],
    filteredMenus: [],
    selectedCategory: null,
  },
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
      state.filteredMenus = action.payload;
    },
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === "all") {
        state.filteredMenus = state.menus;
      } else {
        state.filteredMenus = state.menus.filter(
          (menu) => menu.category === action.payload
        );
      }
    },
  },
});

export const { setMenus, filterByCategory } = menuSlice.actions;

export const selectMenus = (state) => state.menu.filteredMenus;
export const selectSelectedCategory = (state) => state.menu.selectedCategory;

export default menuSlice.reducer;
