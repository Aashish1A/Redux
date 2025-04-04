// Action Types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_QUANTITY = "cart/increaseQuantity";
const CART_DECREASE_QUANTITY = "cart/decreaseQuantity";
import { produce } from "immer";

const initialState = [];

// Action Creators
export function cartAddItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
}
export function cartRemoveItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}
export function increaseCartItemQuantity(productId, quantity) {
  return {
    type: CART_INCREASE_QUANTITY,
    payload: { productId, quantity },
  };
}
export function decreaseCartItemQuantity(productId, quantity) {
  return {
    type: CART_DECREASE_QUANTITY,
    payload: { productId, quantity },
  };
}

// Reducer
// Cart reducer function using Immer's produce for immutability
export default function cartReducer(originalState = initialState, action) {
  return produce(originalState, (draft) => {
    switch (action.type) {
      
      // Add a new item to the cart or increase quantity if already exists
      case CART_ADD_ITEM: {
        // Check if the item already exists in the cart
        const existingItem = draft.find(
          (item) => item.productId === action.payload.productId
        );

        if (existingItem) {
          // If the item exists, increase the quantity by 1
          existingItem.quantity += 1;
        } else {
          // If the item doesn't exist, add it to the cart with quantity 1
          draft.push({ ...action.payload, quantity: 1 });
        }
        break;
      }

      // Remove an item from the cart
      case CART_REMOVE_ITEM: {
        // Find the index of the item to be removed
        const index = draft.findIndex(
          (item) => item.productId === action.payload.productId
        );

        if (index !== -1) {
          // Remove the item from the draft state using splice
          draft.splice(index, 1);
        }
        break;
      }

      // Increase the quantity of a specific item in the cart
      case CART_INCREASE_QUANTITY: {
        // Find the item whose quantity needs to be increased
        const item = draft.find(
          (item) => item.productId === action.payload.productId
        );

        if (item) {
          // Increase the quantity by the specified amount
          item.quantity += action.payload.quantity;
        }
        break;
      }

      // Decrease the quantity of a specific item in the cart
      case CART_DECREASE_QUANTITY: {
        // Find the item whose quantity needs to be decreased
        const item = draft.find(
          (item) => item.productId === action.payload.productId
        );

        if (item) {
          // Decrease the quantity by the specified amount
          item.quantity -= action.payload.quantity;

          // If quantity becomes zero or less, remove the item from the cart
          if (item.quantity <= 0) {
            const index = draft.findIndex(
              (item) => item.productId === action.payload.productId
            );
            draft.splice(index, 1);
          }
        }
        break;
      }

      // Default case: return the current state without changes
      default:
        break;
    }
  });
}