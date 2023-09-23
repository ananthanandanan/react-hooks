# useRef

## What is useRef?

`useRef` is a React hook that allows you to create a mutable object that persists throughout the lifetime of the component.

That is:

- It is a way to store a value that persists between renders.
- It doesn't trigger re-renders when its value changes.

## How to use useRef?

Taking an example of counting the renders of a component:

```js
import React, { useRef } from "react";

function Counter() {
  const renders = useRef(0);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    renders.current++;
  };

  return (
    <div>
      <p>Renders: {renders.current}</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
```

## Main use cases

- Provide focus to an input element.
- Store a mutable value that persists between renders.
- Keep track of previous values of props or state.
