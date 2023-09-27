// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "", // Add the id field
  firstName: "",
  lastName: "",
  email: "",
  avatarUrl: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // This action is used to set user data in the state
      const { id, firstName, lastName, email, photo } = action.payload;
      state.id = id; // Set the id field
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.avatarUrl = photo;
    },
    clearUser: (state) => {
      // This action is used to clear user data from the state (e.g., during logout)
      state.id = ""; // Clear the id field
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.avatarUrl = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user; // Selector to access user data

export default userSlice.reducer;
