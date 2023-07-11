import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const resp = await axios.get("http://localhost:3000/api/products");
      return resp.data;
    } catch (error) {
      console.log("Something went wrong in Async Thunk");
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {
    getProduct: (state) => {
      console.log(state, "state");
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getProduct } = productSlice.actions;

export default productSlice.reducer;
