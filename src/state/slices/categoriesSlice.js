import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: {},
  categories: [],
  subCategories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSubCategories: (state, action) => {
      action.payload.map((subcategory) => {
        console.log("INCLUYE?:", state.subCategories.includes(subcategory))
        if (!state.subCategories.includes(subcategory)) {
          state.subCategories.push(subcategory);
        }
      });
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCategory,
  setSubCategories,
  setCategories,
  setLoading,
  setError,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
