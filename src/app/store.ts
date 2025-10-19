import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import searchSlice from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    search: searchSlice,
  },
  middleware: (getDefault) =>
    getDefault().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
