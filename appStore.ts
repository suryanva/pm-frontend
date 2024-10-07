import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./utils/redux/globalSlice";
import { api } from "./src/api/api.ts";

const appStore = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add the RTK Query middleware
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
