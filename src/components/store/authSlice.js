import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, name: "ash" },
  reducers: {
    logInOut(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
