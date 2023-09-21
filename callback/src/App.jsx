import { useEffect, useState, useCallback } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);

  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);
  const anArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New Array: ${anArray()}`);
    setResult(anArray());
  }, [sum]);

  return (
    <>
      <main className="App">
        <div className="container">
          <input
            type="text"
            placeholder="input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <h1>Output: {userInput || "--"}</h1>
        </div>
      </main>
    </>
  );
}

export default App;
