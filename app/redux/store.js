import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/redux/features/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
