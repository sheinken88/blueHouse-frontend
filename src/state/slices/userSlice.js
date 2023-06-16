import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userData: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    // register: (state, action) => {
    //   state.userData = action.payload
    // },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
