import { createSlice } from "@reduxjs/toolkit";

const persistedState = localStorage.getItem("lastViews")
  ? JSON.parse(localStorage.getItem("lastViews"))
  : { lastViews: [] };

const lastViews = persistedState.lastViews;

const viewsSlice = createSlice({
  name: "views",
  initialState: persistedState,
  reducers: {
    setViews: (state, action) => {
      const id = action.payload;

      if (!state.lastViews.includes(id)) {
        lastViews.length > 5
          ? state.lastViews.shift()
          : state.lastViews.push(action.payload);
      } else {
        console.log("no se agregar");
      }
    },
    clearViews: (state) => {
      console.log("clearViews");
      state.lastViews = [];
    },
  },
});

export const { setViews, clearViews } = viewsSlice.actions;
export default viewsSlice.reducer;
