import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: ""
  },
  reducers: {
    fetchProducts(state){
      state.loading = true
    },
    fetchProductsErrors(state, action){
      state.loading = false;
      state.error = action.payload || "Something went wrong!"
    },
    updateAllProducts(state, action){
      state.loading = false;
      state.list = action.payload;
      state.error = ''
    },
  }
})

export const {updateAllProducts, fetchProducts, fetchProductsErrors} = slice.actions;

export default slice.reducer;