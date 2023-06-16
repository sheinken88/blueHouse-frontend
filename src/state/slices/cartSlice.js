import { createSlice } from "@reduxjs/toolkit";

const persistedState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      items: {},
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState: persistedState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const itemKey = `${newItem.id}_${newItem.attribute || ""}`;
      const existingItem = state.items[itemKey];

      if (!existingItem) {
        state.items[itemKey] = { ...newItem };
        state.totalPrice += Number(newItem.price);
      } else {
        existingItem.quantity++;
        state.totalPrice += Number(newItem.price);
      }
    },
    removeItemFromCart: (state, action) => {
      const { id, attribute } = action.payload;
      console.log("Action Payload: ", action.payload);
      const itemKey = `${id}_${attribute || ""}`;
      const existingItem = state.items[itemKey];
      if (existingItem) {
        state.totalPrice -= Number(existingItem.price) * existingItem.quantity;
        delete state.items[itemKey];
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity, attribute } = action.payload;
      const itemKey = `${id}_${attribute || ""}`;
      const existingItem = state.items[itemKey];
      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalPrice += quantityDifference * Number(existingItem.price);
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
