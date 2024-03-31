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
      state.chatId =
        action?.payload?.currentUser?.uid > action.payload?.user?.uid
          ? action?.payload?.currentUser?.uid + action.payload?.user?.uid
          : action.payload?.user?.uid + action?.payload?.currentUser?.uid;
    },
  },
});

export default chatSlice.reducer;
export const { changeUser } = chatSlice.actions;
