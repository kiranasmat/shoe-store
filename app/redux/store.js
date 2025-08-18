import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./slices/shoeSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    shoes: shoeReducer,
    cart: cartReducer,
  },
});