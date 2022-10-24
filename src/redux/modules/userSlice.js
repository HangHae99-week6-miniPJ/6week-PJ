import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Url 설정
const LOGIN = "/singin";
const LOGOUT = "/singup";
const baseUrl = "http://localhost:3001";

export function UserLogIn(user) {
  console.log("로그인하였습니다.");
  return { type: LOGIN, user };
}

export function UserLogOut(user) {
  console.log("로그아웃하였습니다.");
  return { type: LOGOUT, user };
}

const initialState = {
  user: {
    id: null,
    email: null,
    nickname: null,
  },
  isLogin: false,
  token: "",
  error: "",
};

export const __loginDB = createAsyncThunk(
  "user/__logoinDB",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://warmwinter.co.kr/api/member/login",
        data
      );
      if (response.data.success === false) {
        window.alert(response.data.error.message);
        return thunkAPI.rejectWithValue();
      } else {
        localStorage.setItem("authorization", response.headers.authorization);
        localStorage.setItem("refreshToken", response.headers.refreshtoken);
        localStorage.setItem("nickname", response.data.data.nickname);
        localStorage.setItem("isLogin", true);
        window.alert("환영합니다.");
        return thunkAPI.fulfillWithValue(response.data.data);
      }
    } catch (error) {
      window.alert(data.data.error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__loginDB.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    [__loginDB.rejected]: (state, action) => {
      state.isLogin = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
