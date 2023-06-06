import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: {},
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.review = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setReview, setReviews, setLoading, setError } =
  reviewsSlice.actions;
export default reviewsSlice.reducer;
