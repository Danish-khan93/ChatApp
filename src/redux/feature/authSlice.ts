import { createSlice } from "@reduxjs/toolkit";
import { INITIALSTATE } from "../../types/authTypes";

const initialState: INITIALSTATE = {
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isLoggedIn = true), (state.user = action.payload);
    },
    logOut: (state) => {
      (state.isLoggedIn = false), (state.user = {});
    },
  },
});

export default authSlice.reducer;
export const { login, logOut } = authSlice.actions;
