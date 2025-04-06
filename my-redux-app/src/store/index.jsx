import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productReducer from "./slices/productSlice";

import { configureStore } from "@reduxjs/toolkit";

// Create the Redux store
export const store = configureStore({
  reducer : {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  }
});

// console.log(store.getState());