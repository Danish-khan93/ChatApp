import { createSlice } from "@reduxjs/toolkit";
import { INITIALSTATE } from "../../types/authTypes";

const initialState: INITIALSTATE = {
  isLoggedIn: false,
  userId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isLoggedIn = true), (state.userId = action.payload);
    },
  },
});

export default authSlice.reducer;
export const {login} = authSlice.actions
