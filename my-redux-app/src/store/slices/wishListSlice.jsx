import { createSlice } from "@reduxjs/toolkit";

// -------- Ducks Pattern -------------

// Action Types
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action Creators
export function addWishlistItem(productData){
    return{type: WISHLIST_ADD_ITEM, payload: productData}
}
export function removeWishlistItem(productId){
    return{type: WISHLIST_REMOVE_ITEM,payload: {productId}}
}

// Reducer
const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: ({
    addItem(state, action){
      const existingItem = state.find((item) => item.productId === action.payload.productId);
      if (existingItem) return state;
      return [...state, action.payload];
    },
    removeItem(state, action){
      return state.filter((cartItem) => cartItem.productId !== action.payload.productId);
    }
  })
})

// export const{
//   addWishlistItem,
//   removeWishlistItem,
// } = slice.actions;

export default slice.reducer;