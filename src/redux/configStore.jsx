import { configureStore } from "@reduxjs/toolkit";
import commentList from "./modules/commentListSlice";
import likeSlice from "./modules/likeSlice";
import posts from "./modules/postsSlice";

const store = configureStore({
  reducer: {
    commentList,
    posts,
    likeSlice,
  },
});

export default store;
