# useReducer

## What is useReducer?

`useReducer` is a hook that is used for state management. It is an alternative to `useState`. It is used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one.

## How to use useReducer?

Let's consider a counter example. We will use `useReducer` to implement a counter.

```jsx
import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
```

In the above example, we have defined a reducer function that takes in the current state and an action and returns the next state. The reducer function is passed to the `useReducer` hook along with the initial state. The `useReducer` hook returns the current state and a dispatch function. The dispatch function is used to dispatch an action to the reducer function. The reducer function then returns the next state.
