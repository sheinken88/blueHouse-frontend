import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: {},
  categories: [],
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
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
});

export const { setCategory, setCategories, setLoading, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
