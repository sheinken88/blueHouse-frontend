import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import categoriesReducer from "./slices/categoriesSlice"
import productsReducer from "./slices/productsSlice"
import cartReducer from "./slices/cartSlice"



const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  }
})

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;
