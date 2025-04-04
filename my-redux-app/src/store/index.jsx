import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productReducer from "./slices/productSlice";
import {produce} from "immer";


const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// Create the Redux store
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);


const user = [
  {
    name: "Aashish",
    age: 18
  },
  {
    name: "Adarsh",
    age: 20
  },
  {
    name: "sonu",
    age: 30
  }
]


// ------------understanding immer js -------------

// user[1].age=20;

// const newUsers = user.map((users,i)=>{
//   if(i===1){
//     return {...user, age: 21}
//   }
//   return user
// })


// const newUser = produce(user, (userCopy)=>{
//   userCopy[1].age = 20;
// })
// console.log(newUser);

// console.log(store.getState());

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
