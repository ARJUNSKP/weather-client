import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initialState = {
  searchWeatherData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const fETCH_WEATHER = createAsyncThunk(
  "fetch-weather",
  async (userData, thunkApi) => {
    try {
      return await weatherService.fETCH_WEATHER_DATA(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const weatherSlice = createSlice({
  name: "searchPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fETCH_WEATHER.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fETCH_WEATHER.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(fETCH_WEATHER.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.searchWeatherData = action.payload;
    });
  },
});

export default weatherSlice.reducer;
