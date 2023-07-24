import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'
import {ecommerceApi} from '../services/products'
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecommerceApi.middleware)
});

setupListeners(store.dispatch)
