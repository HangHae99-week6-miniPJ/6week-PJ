import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// State값

const initialState = {
  isLike: true,
  likeNumber: 0,
  isLoading: false,
  success: null,
  error: null,
};

//paramsId값을 payload로 받아왔음.
export const __toggleLike = createAsyncThunk(
  "like/toggleLike",
  //payload = paramsId값.
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://43.201.49.125/likes", { ...payload });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducer: {},
  extraReducers: {
    [__toggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__toggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default likeSlice.reducer;
