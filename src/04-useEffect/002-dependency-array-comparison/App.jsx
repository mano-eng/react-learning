
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 1. Without Dependency Array
  useEffect(() => {
    console.log("No Dependency Array");
  });

  // 2. Empty Dependency Array
  useEffect(() => {
    console.log("Empty Dependency Array");
  }, []);

  // 3. With [count]
  useEffect(() => {
    console.log("Count Dependency");
  }, [count]);

  function increase() {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
