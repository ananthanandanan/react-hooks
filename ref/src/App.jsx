import { useState, useRef } from "react";

// import './App.css'

function App() {
  const [randomInput, setRandomInput] = useState("");
  const [secondsInput, setSecondsInput] = useState(0);
  const renders = useRef(0);
  const timerId = useRef();

  const handleRandomInput = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSecondsInput((secondsInput) => secondsInput + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (secondsInput) {
      renders.current++;
      setSecondsInput(0);
    }
  };

  return (
    <>
      <main className="App">
        <input
          type="text"
          placeholder="random input"
          value={randomInput}
          onChange={handleRandomInput}
        />
        <p>renders: {renders.current}</p>
        <br />
        <section>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </section>
        <br />
        <br />
        <p>Seconds: {secondsInput}</p>
        <br />
        <p>Random Input: {randomInput}</p>
      </main>
    </>
  );
}

export default App;
