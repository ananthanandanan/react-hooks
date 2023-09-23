import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  USER_INPUT: "userInput",
  TG_COLOR: "toggleColor",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ACTIONS.USER_INPUT:
      return {
        ...state,
        userInput: action.payload,
      };
    case ACTIONS.TG_COLOR:
      return {
        ...state,
        color: !state.color,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <>
      <main
        className="App"
        style={{
          color: state.color ? "#FFF" : "#FFF952",
          backgroundColor: state.color ? "#000" : "#FFF",
        }}
      >
        <input
          type="text"
          placeholder="User Input"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: ACTIONS.USER_INPUT, payload: e.target.value })
          }
        />
        <br />
        <p>Count: {state.count}</p>
        <br />
        <section>
          <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.TG_COLOR })}>
            Toggle Color
          </button>
        </section>
        <br />
        <p>User Input: {state.userInput}</p>
      </main>
    </>
  );
}

export default App;
