import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  menuId: 0,
  error: null,
  isLoading: false,
  isSuccess: false,
};

//const headers = { Authorization: `Bearer ${token}` };

// ** addPosts ** //
export const __addPosts = createAsyncThunk(
  "posts/addPosts",
  async (postsData, thunkAPI) => {
    console.log("data", postsData);
    try {
      //토큰
      const data = await axios.post(
        "http://43.201.49.125/posts/",
        { data: postsData }
        // headers
      );
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

// ** editPosts ** //
export const __editPosts = createAsyncThunk(
  "posts/editPosts",
  //postId는 payload로 username,title,body,id를 모두가지고 있는 "객체"다.
  async (postId, thunkAPI) => {
    //console.log("postID", postId);
    try {
      const { data } = await axios.patch(
        //postId에 담긴 객체값을 전부 업데이트한다.
        `http://localhost:3001/posts/${postId.id}`,
        postId
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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

    //게시글 수정
    [__editPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPosts.fulfilled]: (state, action) => {
      const target = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts.splice(target, 1, action.payload);
    },
    [__editPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
