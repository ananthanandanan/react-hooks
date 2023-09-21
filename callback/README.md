# useCallBack

## What is useCallback?

`useCallback` is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

## What is reference equality?

Reference equality is when two variables point to the same object in memory. For example:

```javascript
const a = { name: "John" };
const b = a;

console.log(a === b); // true
```

- In case of functions in react, when the component re-renders, the function is re-created in memory. So, the reference to the function changes. This causes the child component to re-render unnecessarily.

## When to use useCallback?

When you have a function that is being passed down to a child component, and that function is being re-rendered every time the parent component re-renders, you can use `useCallback` to memoize the function and prevent unnecessary re-renders of the child component.

eg.:

```javascript
import React, { useState, useCallback } from "react";
import { Button } from "./Button";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button handleClick={increment}>Increment</Button>
    </div>
  );
};
```

In the example above, the `increment` function is being re-rendered every time the `ParentComponent` re-renders. This is because the `increment` function is being created inside the `ParentComponent` function. To prevent this, we can use `useCallback` to memoize the function and only re-create it when the `count` state changes.
