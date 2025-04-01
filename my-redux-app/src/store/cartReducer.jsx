// Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action Creators
export function cartAddItem(productData){
    return{
        type: CART_ADD_ITEM,
        payload: { productData }
    }
}
export function cartRemoveItem(productId){
    return{
        type: CART_REMOVE_ITEM,
        payload: { productId }
    }
}
export function increaseCartItemQuantity(productId, quantity){
    return{
        type: CART_INCREASE_QUANTITY,
        payload: { productId, quantity }
    }
}
export function decreaseCartItemQuantity(productId, quantity){
    return{
        type: CART_DECREASE_QUANTITY,
        payload: { productId, quantity }
    }
}

// Reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const existingItem = state.find((cartItem)=> cartItem.productId===action.payload.productId)
      if(existingItem){
        return state.map((cartItem)=>{
          if(cartItem.productId===existingItem.productId){
            return {...cartItem, quantity: cartItem.quantity+1};
          }
          return cartItem;
        })
      }
      return [...state, {...action.payload, quantity: 1}];

    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );

    case CART_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + action.payload.quantity,
          };
        }
        return cartItem;
      });

    case CART_DECREASE_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - action.payload.quantity,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
