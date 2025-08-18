import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: []
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const found = state.items.find((i) => i.id === id);
      if (found) found.qty += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const found = state.items.find((i) => i.id === id);
      if (found && found.qty > 1) {
        found.qty -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
    state.cart.items.reduce((sum, i) => sum + i.qty, 0);
export const selectCartTotal = (state) =>
    state.cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
export default cartSlice.reducer;
