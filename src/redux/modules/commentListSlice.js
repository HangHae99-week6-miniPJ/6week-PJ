import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//state
const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

//thunk middleware

// ** addComment **
export const __addComments = createAsyncThunk(
  "commentList/addComments",
  async (commentData, thunkAPI) => {
    console.log(commentData);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/comments/",
        commentData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ** getComment **

export const __getComments = createAsyncThunk(
  "commentList/getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/comments/");
      const newData = data.sort((a, b) => b.id - a.id); //내림차순적용.
      //console.log("newdata", newData);
      return thunkAPI.fulfillWithValue(newData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ** deleteComment **
export const __deleteComments = createAsyncThunk(
  "commentList/deleteComments",
  async (commentId, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      return thunkAPI.fulfillWithValue(commentId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ** editComment **
export const __editComments = createAsyncThunk(
  "commentList/editComments",
  async (commentId, thunkAPI) => {
    try {
      //commentId.id = id들 중에 id하나.
      await axios.patch(
        `http://localhost:3001/comments//${commentId.id}`,
        commentId
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//reducer, extrareducers

const commentListSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
  extraReducers: {
    // ** addComments ** //
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.unshift(action.payload); // push 반대로 입력
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ** getComments ** //
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ** patchComments ** //
    [__editComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__editComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(target, 1, action.payload);
    },
    [__editComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // ** deleteComments ** //
    [__deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload
      );
      state.comments.splice(target, 1);
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//export

export const {} = commentListSlice.actions;
export default commentListSlice.reducer;
