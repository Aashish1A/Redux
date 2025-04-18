import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productReducer from "./slices/productSlice";

import { configureStore } from "@reduxjs/toolkit";

// Custom logger middleware
function logger(store) {
  return function (next) {
    return function (action) {
      console.log("Dispatching action:", action);
      const result = next(action);
      console.log("Next state:", store.getState());
      return result;
    };
  };
}

// Create the Redux store
export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Use getDefaultMiddleware and add custom middleware
});
