import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [randomNum, setRandomNum] = useState("");

  // Fib will only be re-created if the userInput changes
  const fib = useCallback(
    (n) => {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    },
    [userInput]
  );

  // fibNumber will only be re-calculated if the fib function changes
  const fibNumber = useMemo(() => {
    return fib(userInput);
  }, [fib]);

  useEffect(() => {
    console.log("New Number");
  }, [fibNumber]);

  return (
    <>
      <main className="App">
        <div className="container">
          <label htmlFor="fibCount">Fibonacci Sequence</label>
          <input
            type="number"
            id="fibCount"
            placeholder="Position"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <p>Number: {fibNumber || "--"}</p>
          <br />
          <label htmlFor="randomNum">Random Number</label>
          <input
            type="text"
            id="randomNum"
            placeholder="Random Number"
            value={randomNum}
            onChange={(e) => setRandomNum(e.target.value)}
          />
          <p>Number: {randomNum || "--"}</p>
        </div>
      </main>
    </>
  );
}

export default App;
