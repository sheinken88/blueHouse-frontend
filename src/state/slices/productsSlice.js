import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  products: [],
  topSellers: [],
  newArrivals: [],
  onSale: [],
  summerEssentials: [],
  isLoading: false,
  error: null,
  categoryFilters: {
    category: null,
    min_price: 1,
    max_price: 500,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTopSellers: (state, action) => {
      state.topSellers = action.payload;
    },
    setNewArrivals: (state, action) => {
      state.newArrivals = action.payload;
    },
    setOnSale: (state, action) => {
      state.onSale = action.payload;
    },
    setSummerEssentials: (state, action) => {
      state.summerEssentials = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setCategoryFilters: (state, action) => {
      state.categoryFilters = action.payload;
    },
  },
});

export const {
  setProduct,
  setProducts,
  setTopSellers,
  setNewArrivals,
  setOnSale,
  setSummerEssentials,
  setLoading,
  setError,
  setFilteredProducts,
  setCategoryFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
