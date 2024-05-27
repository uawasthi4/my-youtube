import { createSlice } from "@reduxjs/toolkit";
import { maxLiveChatMessageCount } from "../constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.messages.length > maxLiveChatMessageCount) {
        state.messages.splice(maxLiveChatMessageCount, 1);
      }
      state.messages.unshift(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
