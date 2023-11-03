import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/user";
import deviceReducer from "../reducer/device";

export const store = configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
  },
});
