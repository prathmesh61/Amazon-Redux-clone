import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((pro) => pro.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.filter((i) => i.id !== action.payload.id);
      state.cart = item;
    },
    incrementItem: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      item.quantity++;
    },
    decrementItem: (state, action) => {
      const item = state.cart.find((pro) => pro.id === action.payload.id);
      if (item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    totalCart: (state, action) => {
      const total = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      state.cart = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incrementItem,
  decrementItem,
  totalCart,
} = cartSlice.actions;

export default cartSlice.reducer;
