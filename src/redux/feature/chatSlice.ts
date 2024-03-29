import { createSlice } from "@reduxjs/toolkit";
import { INITIALSTATEOFCHAT } from "../../types/chatType";
const initialState: INITIALSTATEOFCHAT = {
  chatId: null,
  user: {},
};

const chatSlice = createSlice({
  initialState,
  name: "userchat",
  reducers: {
    changeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default chatSlice;
