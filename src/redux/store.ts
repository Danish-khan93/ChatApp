import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/feature/authSlice";
import chatReducer from "./feature/chatSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat:chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
