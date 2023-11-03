import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userController from "../api/userApi";
import Cookies from "js-cookie";

const initialState = {
  error: "",
};

export const loginThunk = createAsyncThunk("postUser", async (userCredent) => {
  const { username, password } = userCredent;
  const response = await userController.postUser(username, password);
  return response;
});

export const logoutThunk = createAsyncThunk("logOut", async () => {
  console.log('logging out')
  const response = await userController.logOut();
  return response;
});

export const user = createSlice({
  name: "counter",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.error.message;
      alert("error login");
    });
    builder.addCase(loginThunk.pending, (state, action) => {});
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = action.payload.token
      Cookies.set('token', action.payload.token)
      Cookies.set('refreshToken', action.payload.refreshToken)
      alert("login successful");
    });

    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.error = action.error.message;
      alert("error out");
    });
    builder.addCase(logoutThunk.pending, (state, action) => {});
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.token = null
      Cookies.remove('token')
      Cookies.remove('refreshToken')
    });
  },
});

export default user.reducer;
