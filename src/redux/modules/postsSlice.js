import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosHeaders } from "axios";

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

const headers = {
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  refreshToken: `Bearer ${localStorage.getItem("refreshToken")}`,
};

// ** addPosts ** //
export const __addPosts = createAsyncThunk(
  "posts/addPosts",
  async (postsData, thunkAPI) => {
    console.log("data", postsData);
    try {
      //토큰
      const data = await axios.post(
        "http://43.201.49.125/posts",
        { ...postsData },
        { headers }
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
      const { data } = await axios.get("http://43.201.49.125/posts");
      //get은 잘 들어온다.
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// ** getCategory ** //
export const __getCategoryPosts = createAsyncThunk(
  "posts/getCategoryPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://43.201.49.125/posts/cate/${payload}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
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
      axios.delete(`http://43.201.49.125/posts/${payload}`, { headers });
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
  async (payload, thunkAPI) => {
    console.log("editpost", payload.title);
    try {
      const { data } = await axios.put(
        `http://43.201.49.125/posts/${payload.postId}`,
        { contents: payload.contents, title: payload.title },
        { headers }
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
    //카테고리조회
    [__getCategoryPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCategoryPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getCategoryPosts.rejected]: (state, action) => {
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
        (post) => post.postId === action.payload.postId
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
