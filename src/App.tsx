import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const reduce = () => setCount((prev) => prev - 1);

  return (
    <>
      <h3>Counter</h3>
      <h4>{count}</h4>

      <button type="button" onClick={increment}>
        increment
      </button>
      <button type="button" onClick={reduce}>
        reduce
      </button>
    </>
  );
}

export default App;
