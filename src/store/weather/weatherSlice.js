import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initialState = {
  searchWeatherData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const fETCH_WEATHER_DATA = createAsyncThunk(
  "weather/fetchWeatherData",
  async (userData, thunkApi) => {
    try {
      return await weatherService.FETCH_WEATHER_DATA(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fETCH_WEATHER_DATA.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fETCH_WEATHER_DATA.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(fETCH_WEATHER_DATA.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.searchWeatherData = action.payload;
    });
  },
});

export default weatherSlice.reducer;
