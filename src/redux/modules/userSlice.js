import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://43.201.49.125/signin";

//유저 닉네임 및 프로필 사진 변경하기
export const __editprof = createAsyncThunk(
  "user/editprof",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(SERVER_URL, arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//초기값
const initialState = {
  username: "",
  nickname: "",
  profMypage: "",
};

//리듀서
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
