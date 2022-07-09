import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cart.find((c) => c.id === action.payload.id);
      if (item) {
        item.qty++;
        item.totalPrice = parseFloat(item.price) * parseInt(item.qty);
        console.log(item.totalPrice, item.qty);
      } else {
        state.cart.push(action.payload);
      }
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((c) => c.id === action.payload);
      if (item) {
        item.qty++;
        item.totalPrice = parseFloat(item.price) * parseInt(item.qty);
      }
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((c) => c.id === action.payload);
      if (item) {
        if (item.qty <= 1) {
          const updatedItem = state.cart.filter((c) => c.id !== action.payload);
          state.cart = updatedItem;
        } else {
          item.qty = parseInt(item.qty) - 1;
          item.totalPrice -= parseFloat(item.price);
        }
      }
    },
    removeItem: (state, action) => {
      const updatedItem = state.cart.filter((c) => c.id !== action.payload);
      state.cart = updatedItem;
    },
  },
});
export const { addItem, incrementQty, decrementQty, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
