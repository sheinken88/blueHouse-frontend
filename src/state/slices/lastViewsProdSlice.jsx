import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastProd: [],
};

const lastViewsProdSlice = createSlice({
  name: "lastProdView",
  initialState,
  reducers: {
    setLastViewProducts: (state, action) => {
      state.lastProd = action.payload;
    },
  },
});

export const { setLastViewProducts } = lastViewsProdSlice.actions;
export default lastViewsProdSlice.reducer;
