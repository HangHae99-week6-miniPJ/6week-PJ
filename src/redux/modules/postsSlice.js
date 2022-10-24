import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

// ** addPosts ** //
export const __addPosts = createAsyncThunk(
  "posts/addPosts",
  async (postsData, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/posts", postsData);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//  ** getPosts ** //
export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/posts/");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ** deletePosts ** //
export const __deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (payload, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// ** Reducer / extraReducers ** //
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시글추가.
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.unshift(action.payload);
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 게시글조회
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //게시글삭제
    [__deletePosts.fulfilled]: (state, action) => {
      const bye = state.posts.findIndex((post) => post.id === action.payload);
      //id일치시켜서삭제
      state.posts.splice(bye, 1);
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
