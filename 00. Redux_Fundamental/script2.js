import { createStore } from "redux";
import { productsList } from "../productsList.js";

const initialState = {
  products: productsList,
  cartItems: [],
  wishLists: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case CART_INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + action.payload.quantity,
            };
          }
          return cartItem;
        }),
      };
    case CART_DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - action.payload.quantity,
              };
            }
          })
          .filter((cartItem) => cartItem.quantity > 0),
      };
    case WISHLIST_ADD_ITEM:
      return {
        ...state,
        wishLists: [...state.wishLists, action.payload],
      };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishLists: state.wishLists.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 15, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 20, quantity: 1 },
});
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 20 } });
store.dispatch({
  type: CART_INCREASE_QUANTITY,
  payload: { productId: 15, quantity: 4 },
});
store.dispatch({
  type: CART_DECREASE_QUANTITY,
  payload: { productId: 15, quantity: 2 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 12 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 15 },
});
store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 20 },
});
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 15 },
});