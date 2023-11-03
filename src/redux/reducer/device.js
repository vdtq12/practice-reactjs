import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import deviceController from "../api/deviceApi";

const initialState = {
  isLoading: false,
  error: '',
};

export const getDeviceThunk = createAsyncThunk("device", async (filter) => {
  const response = await deviceController.getDevice(filter)
  return response;
});

export const device = createSlice({
  name: "counter",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDeviceThunk.rejected, (state, action) => {
      state.error = action.error.message;
      alert("error get device list");
      state.isLoading = false
    });
    builder.addCase(getDeviceThunk.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(getDeviceThunk.fulfilled, (state, action) => {
      state.devicesData = action.payload
      state.isLoading = false
    });
  },
});

// export const { test } = device.actions;
export default device.reducer;
