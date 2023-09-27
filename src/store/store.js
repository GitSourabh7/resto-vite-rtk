import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../pages/menu/MenuSlice";
import paginationReducer from "../components/menu/Pagination/PaginationSlice";
import cartReducer from "../components/menu/Cart/CartSlice";
import userReducer from "../components/common/userSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    pagination: paginationReducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware: [logger],

  // Or (both works same)

  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});
