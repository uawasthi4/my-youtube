import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarExpanded: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarExpanded = !state.isSidebarExpanded;
    },
    closeSidebar: (state) => {
      state.isSidebarExpanded = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
