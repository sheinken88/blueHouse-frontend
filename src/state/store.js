import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import reviewsReducer from "./slices/reviewsSlice";
import alertsReducer from "./slices/alertSlice";
import viewsReducer from "./slices/viewsSlice";
import lastViewsProdSlice from "./slices/lastViewsProdSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
    alerts: alertsReducer,
    views: viewsReducer,
    lastviewprod: lastViewsProdSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  localStorage.setItem("lastViews", JSON.stringify(store.getState().views));
});

export default store;
