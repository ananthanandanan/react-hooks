# useMemo

## What is useMemo?

`useMemo` is a React hook that allows you to memoize expensive functions so that you can avoid calling them on every render.
But keep in mind, don't use it for every function, only use it for functions that are expensive to run. Because it will slow down your app.

Note: `useMemo` is a hook that is used for performance optimization. It is not a replacement for `useEffect`.

- And unlike useCallback, which memoizes functions, useMemo
  memoizes the result of a function.

## Referential equality

Just like useCallback, useMemo uses referential equality to determine whether the result of a function has changed. This is extremely useful in case of objects and arrays.

## How to use useMemo?

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
