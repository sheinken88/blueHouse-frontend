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
      let array = [];
      if (state.subCategories.length > 0) {
        state.subCategories.map((subcategory) => {
          array.push(subcategory.id);
        });
      }
      action.payload.map((subcategory) => {
        if (!array.includes(subcategory.id)) {
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
