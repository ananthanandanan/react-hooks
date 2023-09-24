import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const delayer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // Cleanup function
    // This will be called when the component is unmounted or when the value changes
    return () => {
      clearTimeout(delayer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
