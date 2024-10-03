import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSideBarOpen: boolean;
  isDarkModeOn: boolean;
}

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isSideBarOpen: false,
    isDarkModeOn: false,
  },
  reducers: {
    setIsSideBarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSideBarOpen = action.payload;
    },
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    setIsDarkModeOn: (state, action: PayloadAction<boolean>) => {
      state.isDarkModeOn = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkModeOn = !state.isDarkModeOn;
    },
  },
});

export const {
  setIsSideBarOpen,
  toggleSideBar,
  setIsDarkModeOn,
  toggleDarkMode,
} = globalSlice.actions;

export default globalSlice.reducer;
