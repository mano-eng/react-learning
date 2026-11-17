import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100);

  useEffect(() => {
    console.log("Count:", count);
    console.log("Price:", price);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Price: {price}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>

      <button onClick={() => setPrice((prev) => prev + 10)}>
        Increase Price
      </button>
    </div>
  );
}

export default App;
