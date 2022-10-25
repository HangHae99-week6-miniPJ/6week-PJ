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
      await axios.post("http://localhost:3001/like", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//useSelector 확실히 해야겟다. -> qa.
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
