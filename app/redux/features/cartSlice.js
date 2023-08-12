import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { setUser, getUser } = cartSlice.actions;

export default cartSlice.reducer;
