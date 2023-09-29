import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuSlice";
import paginationReducer from "../features/paginationSlice";
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";
import logger from "redux-logger";

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const loadState = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return undefined;
  }

  return JSON.parse(serializedState);
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    pagination: paginationReducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware: [logger],
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
