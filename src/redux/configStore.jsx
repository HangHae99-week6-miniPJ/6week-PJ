import { configureStore } from "@reduxjs/toolkit";
import commentList from "./modules/commentListSlice";
import posts from "./modules/postsSlice";

const store = configureStore({
  reducer: {
    commentList,
    posts,
  },
});

export default store;
