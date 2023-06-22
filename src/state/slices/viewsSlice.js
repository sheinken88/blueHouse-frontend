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
        if (lastViews.length == 10) {
          state.lastViews.shift();
        }

        state.lastViews.push(action.payload);
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
