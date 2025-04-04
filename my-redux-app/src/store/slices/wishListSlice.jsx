// -------- Ducks Pattern -------------

// Action Types
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

const initialState = [];

// Action Creators
export function addWishlistItem(productData){
    return{
        type: WISHLIST_ADD_ITEM,
        payload: productData
    }
}
export function removeWishlistItem(productId){
    return{
        type: WISHLIST_REMOVE_ITEM,
        payload: {productId}
    }
}


// Reducer
export default function wishListReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      const existingItem = state.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        return state; // Do nothing if the item is already in the wishlist
      }
      return [...state, action.payload]; // Add the new item

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );

    default:
      return state;
  }
}
