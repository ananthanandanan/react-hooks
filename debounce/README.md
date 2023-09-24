# useDebounce

This is a custom hook that allows you to debounce any value. Which simply means that it will delay the execution of a function until after a certain amount of time has passed since the last time it was called.

## Why use this hook?

This hook is useful when you want to delay the execution of a function until after a certain amount of time has passed since the last time it was called. For example, if you have an input field that needs to be updated with every keystroke, but you don't want to update it until after the user has stopped typing for a few seconds, then this hook will help you do that. In real life, we don't want the API call to happen on every keystroke, which could be very expensive. Instead, we want to wait until the user has stopped typing for a few seconds before making the API call.
