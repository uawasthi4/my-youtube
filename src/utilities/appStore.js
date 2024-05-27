import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
