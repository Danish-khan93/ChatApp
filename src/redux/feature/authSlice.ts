import { createSlice } from "@reduxjs/toolkit";
import { INITIALSTATE } from "../../types/authTypes";

const initialState: INITIALSTATE = {
  isLoggedIn: false,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isLoggedIn = true), (state.userId = action.payload);
    },
    logOut: (state) => {
        (state.isLoggedIn = false), (state.userId = null);
        
    },
  },
});

export default authSlice.reducer;
export const { login , logOut} = authSlice.actions;
