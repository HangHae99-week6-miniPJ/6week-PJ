// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// //state
// const initialState = {
//   comment: [],
//   isLoading: false,
//   error: null,
// };

// //현재 thunk / reducer는 id 로그인해서 구현하는거 확인해서 다시 짜야된다.

// //thunk middleware

// // ** addComment **
// export const __addComments = createAsyncThunk(
//   "commentList/addComments", //name
//   async (commentData, thunkAPI) => {
//     try {
//       const { data } = await axios.post("url", commentData);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // ** getComment **
// //서버에서가져오는데이터일텐데.. 백에서받아오나???
// export const __getComments = createAsyncThunk(
//   "commentList/getComments",
//   async (payload, thunkAPI) => {
//     try {
//       const { data } = await axios.get("url");
//       const newData = data.sort((a, b) => b.id - a.id); //내림차순적용.
//       return thunkAPI.fulfillWithValue(newData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // ** deleteComment **
// export const __deleteComments = createAsyncThunk(
//   "commentList/deleteComments",
//   async (commentId, thunkAPI) => {
//     try {
//       await axios.delete("url");
//       return thunkAPI.fulfillWithValue(commentId);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // ** editComment **
// export const __editComments = createAsyncThunk(
//   "commentList/editComments",
//   async (commentId, thunkAPI) => {
//     try {
//       //commentId.id = id들 중에 id하나.
//       await axios.patch("url/${commentId.id}", commentId);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// //reducer, extrareducers

// const commentListSlice = createSlice({
//   name: "commentList",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     // ** addComments ** //
//     [__addComments.pending]: (state) => {
//       state.isLoading = true;
//     },
//     // ** getComments ** //

//     // ** patchComments ** //

//     // ** deleteComments ** //
//   },
// });

// //export

// export const {} = commentListSlice.actions;
// export default commentListSlice.reducer;
