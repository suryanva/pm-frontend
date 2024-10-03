import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./utils/redux/globalSlice";

const appStore = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default appStore;
