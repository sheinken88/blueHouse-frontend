import { createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
  name: "alerts",
  initialState: null,
  reducers: {
    setAlert: (state, action) => {
      return action.payload;
    },
    clearAlert: () => null,
  },
});

export const { setAlert, clearAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
