import { createStore } from 'redux';

let initialState = {
  post: 0,
};

//state.post = state.post+1; // Mutating state
//state = {...state, post: state.post+1} // Not Mutating state

function countReducer(state = initialState, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  } else if (action.type === "post/incrementBy") {
    return { ...state, post: state.post + action.payload };
  }

  return state;
}

const store = createStore(countReducer);

console.log(store);

store.subscribe(() => {
  console.log(store.getState);
})

store.dispatch({type: "post/increment"})
store.dispatch({type: "post/increment"})


// initialState = countReducer(initialState, {type: "post/incrementBy", payload: 10});
// console.log(initialState);