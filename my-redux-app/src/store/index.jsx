import { combineReducers, createStore } from "redux";
import cartReducer, { cartAddItem, cartRemoveItem, decreaseCartItemQuantity, increaseCartItemQuantity } from "./cartReducer";
import wishListReducer, { addWishlistItem, removeWishlistItem } from "./wishListReducer";
import productReducer from "./productReducer";


const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer
})

// function combineReducers(reducers){
//   const reducerKeys = Object.keys(reducers);
  
//   return function (state = {}, action){
//     const nextState = {}

//     for(let i=0; i<reducerKeys.length; i++){
//       const key = reducerKeys[i];
//       const reducer = reducers[i];
//       const previousStateForKey = state[key];
//       const nextStateForKey = reducer(previousStateForKey, action);
//       nextState[key] = nextStateForKey;
//     }

//     return nextState;
//   }
// }

// Create the Redux store
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// console.log(store);

// store.dispatch(cartAddItem(1,1));
// store.dispatch(cartAddItem(12,1));
// store.dispatch(cartAddItem(15,1));
// store.dispatch(cartAddItem(20,1));
// store.dispatch(cartRemoveItem(20));
// store.dispatch(increaseCartItemQuantity(15,4));
// store.dispatch(decreaseCartItemQuantity(15,2));
// store.dispatch(addWishlistItem(12));
// store.dispatch(addWishlistItem(15));
// store.dispatch(addWishlistItem(20));
// store.dispatch(removeWishlistItem(20));