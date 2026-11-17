import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect Started");

    return () => {
      console.log("Cleanup Executed");
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show / Hide Counter</button>

      {show && <Counter />}
    </div>
  );
}

export default App;
