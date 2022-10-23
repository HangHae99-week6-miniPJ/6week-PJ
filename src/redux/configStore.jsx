import { configureStore } from "@reduxjs/toolkit";
// import commentList from "./modules/commentListSlice";

const store = configureStore({
  reducer: {
    // commentList,
  },
});

export default store;
