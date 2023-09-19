import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../pages/menu/MenuSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
  middleware: [logger],

  // Or (both works same)

  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});
