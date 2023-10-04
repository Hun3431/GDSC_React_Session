import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={click}>Click</button>
    </div>
  );
};

export default App;
