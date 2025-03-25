import { createStore } from "redux";

// Define action types as constants
const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";


// Initial state
const initialState = {
  post: 0,
};

const product = {
  
}

// Reducer function
function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREMENT_BY:
      return { ...state, post: state.post + action.payload };
    case DECREMENT_BY:
      return {...state, post: state.post - action.payload};
    default:
      return state;
  }
}

// Create action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const incrementBy = (value) => ({ type: INCREMENT_BY, payload: value });
const decrementBy = (value) => ({type: DECREMENT_BY, payload: value});

// Create the Redux store
const store = createStore(countReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());


// Subscribe to store updates
store.subscribe(() => {
  console.log("State updated:", store.getState());
  postCountElement.innerText = store.getState().post;
});

// Performing some operations
const postCountElement = document.getElementsByClassName("postCount");
postCountElement.innerText = store.getState().post;

// Dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementBy(5));
store.dispatch(decrement());
store.dispatch(decrementBy(3));