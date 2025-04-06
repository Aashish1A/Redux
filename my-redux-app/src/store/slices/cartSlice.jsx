import { createSlice } from "@reduxjs/toolkit";

// Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action Creators
export function cartAddItem(productData) {
  return {type: CART_ADD_ITEM, payload: productData};
}
export function cartRemoveItem(productId) {
  return {type: CART_REMOVE_ITEM, payload: { productId }};
}
export function increaseCartItemQuantity(productId, quantity) {
  return {type: CART_INCREASE_QUANTITY,payload: { productId, quantity }};
}
export function decreaseCartItemQuantity(productId, quantity) {
  return {type: CART_DECREASE_QUANTITY,payload: { productId, quantity }};
}

// Reducer
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action){
      const existingItem = state.find((item) => item.productId === action.payload.productId);
      if (existingItem) existingItem.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeItem(state, action){
      const index = state.findIndex((item) => item.productId === action.payload.productId);
      if (index !== -1) state.splice(index, 1);
    },
    increaseQuantity(state, action){
      const item = state.find((item) => item.productId === action.payload.productId);
      if (item) item.quantity += action.payload.quantity;
    },
    decreaseQuantity(state, action){
      const item = state.find((item) => item.productId === action.payload.productId);
      if (item) item.quantity -= action.payload.quantity;
      if (item.quantity <= 0) {
        const index = state.findIndex((item) => item.productId === action.payload.productId);
        state.splice(index, 1);
      }
    }
  }
})

export default slice.reducer;