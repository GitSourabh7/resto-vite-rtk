import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../pages/menu/MenuSlice";
import paginationReducer from "../components/menu/Pagination/PaginationSlice";
import cartReducer from "../components/menu/Cart/CartSlice";
import userReducer from "../components/common/userSlice";
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
